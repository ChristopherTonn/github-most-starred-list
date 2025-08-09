import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GithubService } from './github.service';
import * as dateUtils from '../helpers/date.utils';

describe('GithubService', () => {
  let service: GithubService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubService],
    });
    service = TestBed.inject(GithubService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get most starred repos', () => {
    const mockResponse = {
      items: [
        {
          id: 1,
          name: 'test-repo',
          owner: { login: 'test-user', avatar_url: 'test-avatar.jpg' },
          stargazers_count: 100,
          open_issues_count: 5,
          description: 'Test description',
        },
      ],
    };

    service.getMostStarredRepos().subscribe((repos) => {
      expect(repos).toBeTruthy();
      expect(repos.length).toBeGreaterThan(0);
    });

    const req = httpMock.expectOne((request) =>
      request.url.includes('api.github.com/search/repositories')
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should return repos with correct structure', () => {
    const mockResponse = {
      items: [
        {
          id: 123,
          name: 'awesome-repo',
          owner: {
            login: 'awesome-user',
            avatar_url: 'https://example.com/avatar.jpg',
          },
          stargazers_count: 1500,
          open_issues_count: 10,
          description: 'An awesome repository',
        },
      ],
    };

    service.getMostStarredRepos().subscribe((repos) => {
      expect(repos).toBeTruthy();
      expect(repos.length).toBeGreaterThan(0);
      expect(repos[0]).toEqual(
        jasmine.objectContaining({
          id: jasmine.any(Number),
          name: jasmine.any(String),
          owner: jasmine.objectContaining({
            login: jasmine.any(String),
          }),
          stargazers_count: jasmine.any(Number),
        })
      );
    });

    const req = httpMock.expectOne((request) =>
      request.url.includes('api.github.com/search/repositories')
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should handle HTTP errors', () => {
    const errorMessage = 'API rate limit exceeded';

    service.getMostStarredRepos().subscribe({
      next: () => fail('should have failed with 403 error'),
      error: (error) => {
        expect(error.status).toBe(403);
        expect(error.error).toBe(errorMessage);
      },
    });

    const req = httpMock.expectOne((request) =>
      request.url.includes('api.github.com/search/repositories')
    );
    req.flush(errorMessage, { status: 403, statusText: 'Forbidden' });
  });
});

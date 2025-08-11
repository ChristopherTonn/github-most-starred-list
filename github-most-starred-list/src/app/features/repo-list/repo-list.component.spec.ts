import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RepoListComponent } from './repo-list.component';
import { GithubService } from '../../core/services/github.service';
import { of } from 'rxjs';
import { Repo } from '../../core/models/repo.model';

describe('RepoListComponent', () => {
  let component: RepoListComponent;
  let fixture: ComponentFixture<RepoListComponent>;
  let httpMock: HttpTestingController;
  let githubService: GithubService;

  const mockRepos: Repo[] = [
    {
      id: 1,
      name: 'test-repo',
      full_name: 'user/test-repo',
      html_url: 'https://github.com/user/test-repo',
      description: 'Just a test repo',
      stargazers_count: 42,
      open_issues_count: 3,
      created_at: '2025-08-01T00:00:00Z',
      owner: {
        login: 'user',
        avatar_url: 'https://example.com/avatar.png',
      },
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepoListComponent, HttpClientTestingModule],
      providers: [GithubService],
    }).compileComponents();

    fixture = TestBed.createComponent(RepoListComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    githubService = TestBed.inject(GithubService);

    spyOn(githubService, 'getMostStarredRepos').and.returnValue(of(mockRepos));
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should initialize with loading state', () => {
    expect(component.isLoading).toBe(false);
    expect(component.repos).toEqual([]);

    fixture.detectChanges();
  });

  it('should load repos on init', fakeAsync(() => {
    fixture.detectChanges();
    tick();

    expect(githubService.getMostStarredRepos).toHaveBeenCalled();
    expect(component.repos).toEqual(mockRepos);
  }));
});

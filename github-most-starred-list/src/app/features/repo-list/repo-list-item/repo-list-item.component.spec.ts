import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RepoListItemComponent } from './repo-list-item.component';
import { Repo } from '../../../core/models/repo.model';

describe('RepoListItemComponent', () => {
  let component: RepoListItemComponent;
  let fixture: ComponentFixture<RepoListItemComponent>;

  const mockRepo: Repo = {
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
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepoListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RepoListItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.repo = mockRepo;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display repo name', () => {
    component.repo = mockRepo;
    fixture.detectChanges();

    const titleElement = fixture.nativeElement.querySelector('.repo-list-item__title');
    expect(titleElement?.textContent).toContain('test-repo');
  });

  it('should display stars count', () => {
    component.repo = mockRepo;
    fixture.detectChanges();

    const starsElement = fixture.nativeElement.querySelector('.badge--stars');
    expect(starsElement?.textContent).toContain('42');
  });
});

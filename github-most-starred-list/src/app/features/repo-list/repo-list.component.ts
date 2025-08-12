import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { GithubService } from '../../core/services/github.service';
import { Repo } from '../../core/models/repo.model';
import { RepoListItemComponent } from './repo-list-item/repo-list-item.component';

@Component({
  selector: 'app-repo-list',
  standalone: true,
  imports: [CommonModule, RepoListItemComponent, InfiniteScrollModule],
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css'],
})
export class RepoListComponent implements OnInit {
  repos: Repo[] = [];
  isLoading = false;
  isLoadingMore = false;
  error = '';
  page = 1;
  hasMoreData = true;

  readonly itemsPerPage = 50;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.loadRepos(true);
  }

  loadRepos(isInitialLoad = false): void {
    if ((isInitialLoad ? this.isLoading : this.isLoadingMore) || !this.hasMoreData) return;

    if (isInitialLoad) {
      this.isLoading = true;
    } else {
      this.isLoadingMore = true;
    }

    this.githubService.getMostStarredRepos(this.page, this.itemsPerPage).subscribe({
      next: (data) => {
        if (data.length === 0) {
          this.hasMoreData = false;
        } else {
          this.repos = [...this.repos, ...data];
          this.page++;
        }

        if (isInitialLoad) {
          this.isLoading = false;
        } else {
          this.isLoadingMore = false;
        }
      },
      error: (err) => {
        this.error = 'Failed to load repositories';
        this.isLoading = false;
        this.isLoadingMore = false;
        console.error(err);
      },
    });
  }

  onScroll(): void {
    this.loadRepos(false);
  }
}

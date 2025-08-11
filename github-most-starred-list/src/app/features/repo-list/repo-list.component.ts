import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoListItemComponent } from './repo-list-item/repo-list-item.component';
import { GithubService } from '../../core/services/github.service';
import { Repo } from '../../core/models/repo.model';

@Component({
  selector: 'app-repo-list',
  imports: [CommonModule, RepoListItemComponent],
  templateUrl: './repo-list.component.html',
  styleUrl: './repo-list.component.css',
})
export class RepoListComponent {
  items = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);

  repos: Repo[] = [];
  isLoading = false;
  error?: string;

  constructor(private githubService: GithubService) {}
  ngOnInit(): void {
    this.loadPage(1);
  }

  loadPage(page: number): void {
    this.isLoading = true;
    this.githubService.getMostStarredRepos(page).subscribe({
      next: (res) => {
        this.repos = res;
        console.log('Repos loaded:', this.repos);
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load repositories.';
        console.error(err);
        this.isLoading = false;
      },
    });
  }
}

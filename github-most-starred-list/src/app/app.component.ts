import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { getDateFromNowThirtyDaysAgo } from './core/helpers/date.utils';
import { GithubService } from './core/services/github.service';
import { RepoListComponent } from './features/repo-list/repo-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RepoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'github-most-starred-list';

  constructor(private githubService: GithubService) {
    console.log('Date from now 30 days ago:', getDateFromNowThirtyDaysAgo());
    this.githubService.getMostStarredRepos().subscribe((data) => {
      console.log('DATA: ', data);
    });
  }
}

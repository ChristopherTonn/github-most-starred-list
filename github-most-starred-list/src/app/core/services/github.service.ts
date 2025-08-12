import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { getDateFromNowThirtyDaysAgo } from '../helpers/date.utils';
import { Repo } from '../models/repo.model';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private readonly apiUrl = 'https://api.github.com/search/repositories';

  constructor(private http: HttpClient) {}

  getMostStarredRepos(page = 1, perPage = 50): Observable<Repo[]> {
    const thirtyDaysAgo = getDateFromNowThirtyDaysAgo();
    const params = {
      q: `created:>${thirtyDaysAgo}`,
      sort: 'stars',
      order: 'desc',
      page: page.toString(),
      per_page: perPage.toString(),
    };

    return this.http
      .get<{ items: Repo[] }>(this.apiUrl, { params })
      .pipe(map((response) => response.items));
  }
}

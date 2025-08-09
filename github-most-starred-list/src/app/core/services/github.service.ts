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

  getMostStarredRepos(page: number = 1): Observable<Repo[]> {
    const date = getDateFromNowThirtyDaysAgo();

    const params = new HttpParams()
      .set('q', `created:>${date}`)
      .set('sort', 'stars')
      .set('order', 'desc')
      .set('page', page.toString());

    return this.http
      .get<{ items: Repo[] }>(this.apiUrl, { params })
      .pipe(map((response) => response.items));
  }
}

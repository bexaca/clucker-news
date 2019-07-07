import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HackerNewsAPIService {
  baseUrl = 'https://node-hnapi.herokuapp.com';

  constructor(private http: HttpClient) {}

  fetchStories(storyType: string, page: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/${storyType}?page=${page}`)
      .pipe(map(response => response));
  }

  fetchComments = (id: number): Observable<any> => {
    return this.http.get(`${this.baseUrl}/item/${id}`);
  };
}

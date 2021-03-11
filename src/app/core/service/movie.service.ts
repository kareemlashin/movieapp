import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListMovie } from '../models/list-movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _httpClient: HttpClient) { }
  getMovies(page: number): Observable<ListMovie> {
    return this._httpClient.get<ListMovie>(`https://api.themoviedb.org/3/trending/all/day?api_key=25ad1aa7c58bc7f63b597e2504bb2737&page=${page}`);
  }
}

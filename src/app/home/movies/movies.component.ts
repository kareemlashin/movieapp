import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../core/service/movie.service';
import { ListMovie, Result } from './../../core/models/list-movie';
import { Selector, Store, Select } from '@ngxs/store';
import { AddLoading } from '../../core/action/dir.action';
import { dirState } from '../../core/state/dir.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  expression: boolean = false;
  movies: Result[] | any = [];
  data2: Array<Result> | any = [];

  pageNumber: number = 0;
  constructor(private _MovieService: MovieService, private _store: Store) {
  }
  ngOnInit(): void {

    this.load();
  }

  load() {
    this.expression = true;
    this.pageNumber = 1 + this.pageNumber;
    this._MovieService.getMovies(this.pageNumber).subscribe(data => {
      this.data2 = data.results;
      this.movies.concat(this.data2);
      this.movies = [...this.movies, ...this.data2];
      this._store.dispatch(new AddLoading(false));
      this.expression = false;
    })
  }

}

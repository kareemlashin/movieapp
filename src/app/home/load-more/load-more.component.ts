import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../core/service/movie.service';
import { ListMovie, Result } from './../../core/models/list-movie';
import { Store } from '@ngxs/store';
import { AddLoading } from '../../core/action/dir.action';


@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent implements OnInit {


  expression: boolean = false;
  movies: Result[] | any = [];
  data2: Array<Result> | any = [];
  pages: number[] = [];
  pageNumber: number = 1;
  constructor(private _MovieService: MovieService, private _store: Store) {
  }
  ngOnInit(): void {
    this.load(this.pageNumber);
    for (let index = 1; index < 11; index++) {
      this.pages.push(index);

    }
  }

  load(pageNumber:number) {
    this.expression = true;
    this.pageNumber = pageNumber;
    this._MovieService.getMovies(pageNumber).subscribe(data => {
      this.data2 = data.results;
      this.movies.concat(this.data2);
      this.movies = [...this.data2];
      this._store.dispatch(new AddLoading(false));
      this.expression = false;
    })
  }
  next() {
    this.pageNumber =1+ this.pageNumber;
    this.load(this.pageNumber);
  }
  prev() {

    this.pageNumber = this.pageNumber-1;
    if (this.pageNumber == 0 || this.pageNumber <= 1) {
      this.pageNumber = 1;
    }
    this.load(this.pageNumber);
  }
}

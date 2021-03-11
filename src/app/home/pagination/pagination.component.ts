import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../core/service/movie.service';
import { ListMovie, Result } from './../../core/models/list-movie';
import { Store } from '@ngxs/store';
import { AddLoading } from '../../core/action/dir.action';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  expression: boolean = false;
  movies: Result[] | any = [];
  data2: Array<Result> | any = [];

  pageNumber: number = 0;
  constructor(private _MovieService: MovieService, private _store:Store) {
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
  onMousewheel($event: Event) {

    var layout = document.getElementById('scroll') as HTMLElement;
    var pannel2 = document.getElementById('all') as HTMLElement;
    let scroll = layout.offsetHeight;
    let allH = layout.scrollTop;
    let allH3 = pannel2.scrollHeight;
    if (allH >= allH3 - 700) {
      this.load();

    }
  }
}

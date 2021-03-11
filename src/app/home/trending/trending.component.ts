import { Component, OnInit } from '@angular/core';
import { ListMovie, Result } from './../../core/models/list-movie';
import { MovieService } from './../../core/service/movie.service';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {

  movies: Result[] | any = [];
  constructor(private _MovieService: MovieService) {

  }
  ngOnInit(): void {
    this._MovieService.getMovies(4).subscribe(data => {
      this.movies = data.results?.slice(0, 3);
    })
  }
}

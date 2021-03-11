import { Component, OnInit } from '@angular/core';
import { ListMovie, Result } from './../../core/models/list-movie';
import { MovieService } from './../../core/service/movie.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  movies: Result[] | any = [];
  constructor(private _MovieService: MovieService) {

  }
  ngOnInit(): void {
    this._MovieService.getMovies(1).subscribe(data => {
      this.movies = data.results?.slice(0,3);
    })
  }

}

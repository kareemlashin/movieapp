import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddDir ,AddLoading} from './../../core/action/dir.action';
import { dirState, dirStateModel } from './../../core/state/dir.state';
import { Result } from '../../core/models/list-movie';
import { MovieService } from '../../core/service/movie.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  dir :string ='';
  @Select(dirState.getLoading) _loading: Observable<boolean> | any;
  @Select(dirState.getDir) dirSelector: Observable<string> | any;

  movies: Result[] | any = [];
  constructor(private _MovieService: MovieService,private _store:Store) {
    this._store.dispatch(new AddLoading(true));

  }
  ngOnInit(): void {
    this._store.dispatch(new AddLoading(false));

    this._MovieService.getMovies(2).subscribe(data => {
      this.movies = data.results;
      this._store.dispatch(new AddLoading(false));
      console.log(this._loading)
    })
    this.dir = localStorage.getItem('dir') ||'ltr';

  }
  option: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },

    },
    nav: false
  }
  customOptionsRtl = {
    ...this.option,
    rtl:true
  }
  customOptionsLtr = {
    ...this.option,
    rtl: false
  }
}

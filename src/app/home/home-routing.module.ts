import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { MoviesComponent } from './movies/movies.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { IndexComponent } from './index/index.component';
import { PaginationComponent } from './pagination/pagination.component';
import { LoadMoreComponent } from './load-more/load-more.component';

const routes: Routes = [
  {
    path: '', component: IndexComponent, children: [
      { path: '', component: BaseComponent },
      { path: 'base', component: BaseComponent },
      { path: 'movies', component: MoviesComponent },
      { path: 'listMovies', component: LoadMoreComponent },
      { path: 'moviesNews', component: PaginationComponent },
      { path: 'movie/:id', component: SingleMovieComponent }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

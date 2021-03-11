import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { TrendingComponent } from './trending/trending.component';
import { BaseComponent } from './base/base.component';
import { NavComponent } from './nav/nav.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { SliderComponent } from './slider/slider.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesComponent } from './movies/movies.component';
import { IndexComponent } from './index/index.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { ScrollComponent } from './scroll/scroll.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TranslateSettingModule } from '../shared/translate.module';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxsModule } from '@ngxs/store';
import { dirState } from '../core/state/dir.state';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [TrendingComponent, BaseComponent, NavComponent, SingleMovieComponent, SliderComponent, HeaderComponent, FooterComponent, MoviesComponent, IndexComponent, LoadMoreComponent, ScrollComponent, PaginationComponent, LoadingComponent ],
  imports: [
  CommonModule,
    HomeRoutingModule,
    TranslateSettingModule,
    CarouselModule,
    NgxsModule.forRoot([
      dirState
    ])
  ],
  exports: [LoadingComponent, SliderComponent]
})
export class HomeModule { }

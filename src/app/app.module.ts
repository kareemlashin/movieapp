import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateSettingModule } from './shared/translate.module';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './core/pipe/search.pipe';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderComponent } from './component/slider/slider.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HomeModule } from './home/home.module';
import { NgxsModule } from '@ngxs/store';
import { dirState } from './core/state/dir.state';
import { IndexAdminComponent } from './index-admin/index-admin.component';
import { BaseAdminComponent } from './base-admin/base-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    SliderComponent,
    IndexAdminComponent,
    BaseAdminComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    TranslateSettingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    HomeModule,
NgxsModule.forRoot([
      dirState
    ])
  ],
  exports: [],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);

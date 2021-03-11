import { Component } from '@angular/core';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { dirState, } from './core/state/dir.state';
import { AddLoading } from './core/action/dir.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  @Select(dirState.getLoading) _loading: Observable<boolean> | any;


  dir:string = '';
  title = 'movie';

  constructor(private _Store: Store) {
    this._Store.dispatch(new AddLoading(false))
   }

  ngOnInit(): void {
  }

}

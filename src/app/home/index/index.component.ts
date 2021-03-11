import { Component, OnInit } from '@angular/core';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { dirState } from './../../core/state/dir.state';
import { AddDir, AddLoading } from '../../core/action/dir.action';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @Select(dirState.getLoading) _loading: Observable<boolean> | any;
  @Select(dirState.getDir) _dir: Observable<string> | any;

  constructor(private _Store: Store) { }
  dir: any = 'ltr';
  loading: any = '';

  ngOnInit(): void {
    this.dir = localStorage.getItem('dir') || 'ltr';
    localStorage.setItem('dir', this.dir);
    this._Store.dispatch(new AddDir(this.dir));


  }


}

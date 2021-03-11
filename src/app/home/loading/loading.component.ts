import { Component, OnInit } from '@angular/core';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddLoading } from './../../core/action/dir.action';
import { dirState, dirStateModel } from './../../core/state/dir.state';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  @Select(dirState.getLoading) dirSelector: Observable<boolean> | any;

  constructor(private _Store: Store) { }

  ngOnInit(): void {
  }

}

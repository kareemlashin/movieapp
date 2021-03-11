import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddDir,AddLoading } from './../../core/action/dir.action';
import { dirState,dirStateModel } from './../../core/state/dir.state';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Select(dirState.getDir) dirSelector: Observable<string>|any;

  @Output() _dir: EventEmitter<string> = new EventEmitter<string>();
  @Output() _loading: EventEmitter<boolean> = new EventEmitter<boolean>();

  dir = localStorage.getItem('dir') || 'ltr';
  rtl: boolean = this.dir == 'rtl' ? true : false;
  lang: any = '';
  constructor(private translate: TranslateService, private _Store: Store) {
    this.lang = localStorage.getItem('dir') == 'rtl' ? 'ar' : 'en';
    this.translate.use(this.lang);
  }
  ngOnInit(): void {
    let y = document.getElementById('nav');
    let z = y?.offsetHeight;
    let m = z + 'px';
    this._Store.dispatch(new AddDir(this.dir));

  }

  useLanguage(language: any) {

    this.lang = language;
    this._loading.emit(true);
    if (language == 'ar') {
      this.dir = "rtl";
      this.rtl = true;
      localStorage.setItem('dir', 'rtl');
      this._dir.emit('rtl');
      this._loading.emit(true);
      this._Store.dispatch(new AddDir('rtl'));

    } else {
      this.dir = "ltr";
      this.rtl = false;
      localStorage.setItem('dir', 'ltr');
      this._dir.emit('ltr');
      this._Store.dispatch(new AddDir('ltr'));

    }
    this.translate.use(language);
    this._Store.dispatch(new AddLoading(false));

  }

}

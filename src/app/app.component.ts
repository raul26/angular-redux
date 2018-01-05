import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from './common/index';
import * as layout from './common/layout/layout.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public openedModalName$: Observable<any>;
  title = 'app';

  constructor(
    private store: Store<fromRoot.AppState>
  ) {
    this.openedModalName$ = store.select(fromRoot.getLayoutOpenedModalName);
  }

  handleOpenModal(modalName: string): void {
    this.store.dispatch(new layout.OpenModalAction(modalName));
  }

  handleCloseModal(modalName: string): void {
    this.store.dispatch(new layout.CloseModalAction(modalName));
  }
}

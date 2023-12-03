import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './store/state/app.state';
import { EUserActions } from './store/actions/user.actions';
import { EStorageActions } from './store/actions/storage.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'booking-tt';

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.store.dispatch({
      type: EUserActions.GetInfo
    })
    this.store.dispatch({
      type: EStorageActions.GetStorage, 
      payload: "d3541a1d-b22e-4203-aca0-330e7b1248ca"
    });
  }
}

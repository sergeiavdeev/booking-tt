import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './store/state/app.state';
import { EUserActions } from './store/actions/user.actions';

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

  }
}

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EUserActions } from 'src/app/store/actions/user.actions';
import { selectUser } from 'src/app/store/selectors/user.selector';
import { IAppState } from 'src/app/store/state/app.state';
import { env } from 'src/environments/environments';

@Component({
  selector: 'nav-component',
  templateUrl: './nav.component.html'
})
export class NavComponent {
  title = 'web-app';
  user$ = this.store.select(selectUser);

  constructor(private store: Store<IAppState>) {
  }

  login(): boolean {
    //this.store.dispatch({type: EUserActions.GetInfo});
    window.location.href = env.apiServer + "/oauth2/authorization/keycloak";
    return false;
  }

  logout(): boolean {
    window.location.href = env.apiServer + "/logout"
    //this.store.dispatch({type: EUserActions.Logout})
    return false;
  }
}

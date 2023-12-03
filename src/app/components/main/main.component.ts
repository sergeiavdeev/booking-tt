import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EStorageActions } from 'src/app/store/actions/storage.actions';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private store: Store<IAppState>) {
  }

  ngOnInit() {

    this.store.dispatch({type: EStorageActions.GetStorage, payload: "d3541a1d-b22e-4203-aca0-330e7b1248ca"});
  }
}

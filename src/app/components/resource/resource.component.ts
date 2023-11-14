import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { EDeviationActions } from 'src/app/store/actions/deviation.actions';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html'
})
export class ResourceComponent {

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    
    //window.open("http://localhost:8085/auth.html");

    
    this.store.dispatch({
      type: EDeviationActions.Add
    })
    
  }
}

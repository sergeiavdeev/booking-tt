import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, of } from 'rxjs';
import { DeviationService } from 'src/app/services/deviation.service';
// import { EMPTY } from 'rxjs';
// import { map, mergeMap, catchError } from 'rxjs/operators';

import { EDeviationActions } from 'src/app/store/actions/deviation.actions';
//import all requried services or any dependencies

@Injectable()
export class DeviationEffects {
    constructor(private actions$: Actions, private service: DeviationService) { }

    add$ = createEffect(() =>
        this.actions$.pipe(
            ofType(EDeviationActions.Add),
            mergeMap(() => this.service.addDeviation()
            .pipe(
                map((res) => {
                    var a = 1;
                    return {type: EDeviationActions.Ok}
                })         
            ))
        )
    );
}
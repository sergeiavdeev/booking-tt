import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "src/app/services/user.service";
import { EUserActions } from "../actions/user.actions";
import { map, mergeMap } from "rxjs";
import { IUserState } from "../state/user.state";

@Injectable()
export class UserEffects {
    constructor(private actions$: Actions, private service: UserService) { }

    getInfo$ = createEffect(() => 
        this.actions$.pipe(
            ofType(EUserActions.GetInfo),
            mergeMap(() => this.service.getUserInfo()
                .pipe(
                    map((info: IUserState) => ({ type: EUserActions.GetInfoOk, payload: info }))
                )
            )
        )
    )

    logout$ = createEffect(() => 
        this.actions$.pipe(
            ofType(EUserActions.Logout),
            mergeMap(() => this.service.logout()
                .pipe(
                    map(() => ({type: EUserActions.Clear}))
                ))
        )
    )
}
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { StorageService } from "src/app/services/storage.service";
import { EStorageActions, GetStorage, StorageActions } from "../actions/storage.actions";
import { map, mergeMap } from "rxjs";
import { IStorageState } from "../state/storage.state";

@Injectable()
export class StorageEffects {

    constructor(private action$: Actions, private service: StorageService){}

    getStorage$ = createEffect(() => 
        this.action$.pipe(
            ofType(EStorageActions.GetStorage),
            mergeMap((action: GetStorage) => this.service.getStorage(action.payload)
                .pipe(
                    map((storage: IStorageState) => ({type: EStorageActions.GetStorageOk, payload: storage}))
                )
            )
        )
    )    
}
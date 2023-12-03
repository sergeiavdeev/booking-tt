import { Action } from "@ngrx/store";
import { IStorageState } from "../state/storage.state";
import { HttpResponse } from "@angular/common/http";

export enum EStorageActions {
    GetStorage = "[Storage] get",
    GetStorageOk = "[Storage] get OK",
    GetStorageError = "[Storage] get error"    
}

export class GetStorage implements Action {
    
    public readonly type = EStorageActions.GetStorage;

    constructor(public payload: String) {}
}

export class GetStorageOk implements Action {
    
    public readonly type = EStorageActions.GetStorageOk;

    constructor(public payload: IStorageState) {}
}

export class GetStorageError implements Action {
    
    public readonly type = EStorageActions.GetStorageError;

    constructor(public payload: HttpResponse<any>) {}
}

export type StorageActions = GetStorage | GetStorageOk | GetStorageError;
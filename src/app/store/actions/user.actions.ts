import { Action } from "@ngrx/store";
import { IUserState } from "../state/user.state";
import { HttpResponse } from "@angular/common/http";

export enum EUserActions {

    GetInfo = "[User] get info",
    GetInfoOk = "[User] get info succes",
    GetInfoError = "[User] get info error",
    Clear = "[User] clear"
}

export class GetInfo implements Action {
    public readonly type = EUserActions.GetInfo;

    constructor() {}
}

export class GetInfoOk implements Action {

    public readonly type = EUserActions.GetInfoOk;

    constructor(public payload: IUserState) {}
}

export class GetInfoError implements Action {
    public readonly type = EUserActions.GetInfoError;

    constructor(public payload: HttpResponse<any>) {}
}

export class Clear implements Action {
    public readonly type = EUserActions.Clear;

    constructor() {}
}

export type UserActions = GetInfo | GetInfoOk | GetInfoError | Clear;
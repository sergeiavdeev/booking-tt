import { Action } from "@ngrx/store";

export enum EDeviationActions {

    Add = "[Deviation] add",
    Ok = "[Deviation] ok",
    Error = "[Deviation] error"
}

export class Add implements Action {
    readonly type = EDeviationActions.Add;
    constructor() { }
}

export class Ok implements Action {
    readonly type = EDeviationActions.Ok;
    constructor() { }
}

export class Error implements Action {
    readonly type = EDeviationActions.Error;
    constructor() { }
}

export type DeviationActions = Add | Ok | Error

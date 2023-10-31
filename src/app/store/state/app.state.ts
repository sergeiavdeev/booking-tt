import {RouterReducerState} from "@ngrx/router-store";

export interface IAppState {
  router?: RouterReducerState
}

export const initialState: IAppState = {

}

export function getInitialAppState(): IAppState {
  return initialState;
}

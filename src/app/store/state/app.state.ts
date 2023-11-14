import {RouterReducerState} from "@ngrx/router-store";
import { IUserState, initialUserState } from "./user.state";

export interface IAppState {
  router?: RouterReducerState;
  user: IUserState;
}

export const initialState: IAppState = {
  user: initialUserState
}

export function getInitialAppState(): IAppState {
  return initialState;
}

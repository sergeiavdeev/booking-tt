import {RouterReducerState} from "@ngrx/router-store";
import { IUserState, initialUserState } from "./user.state";
import { IStorageState, initialStorageState } from "./storage.state";

export interface IAppState {
  router?: RouterReducerState;
  user: IUserState;
  storage: IStorageState;
}

export const initialState: IAppState = {
  user: initialUserState,
  storage: initialStorageState
}

export function getInitialAppState(): IAppState {
  return initialState;
}

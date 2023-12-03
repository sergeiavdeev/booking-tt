import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {routerReducer} from "@ngrx/router-store";
import { userReducer } from "./user.reducer";
import { storageReducer } from "./storage.reducer";

export const appReducer: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  user: userReducer,
  storage: storageReducer
}

export const metaReducers: MetaReducer<IAppState>[] = [];

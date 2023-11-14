import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {routerReducer} from "@ngrx/router-store";
import { userReducer } from "./user.reducer";

export const appReducer: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  user: userReducer
}

export const metaReducers: MetaReducer<IAppState>[] = [];

import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {routerReducer} from "@ngrx/router-store";

export const appReducer: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
}

export const metaReducers: MetaReducer<IAppState>[] = [];

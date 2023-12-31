import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { IUserState } from "../state/user.state";

const userSelector = (state: IAppState) => state.user;

export const selectUser = createSelector(
    userSelector,
    (state: IUserState) => state
);
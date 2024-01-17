import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { IStorageState } from "../state/storage.state";

const storageSelector = (state: IAppState) => state.storage;

export const selectStorage = createSelector(
    storageSelector,
    (state: IStorageState) => state
);
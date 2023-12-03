import { EStorageActions, StorageActions } from "../actions/storage.actions";
import { IStorageState, initialStorageState } from "../state/storage.state";

export const storageReducer = (
    state = initialStorageState,
    action: StorageActions

): IStorageState => {

    switch(action.type) {

        case EStorageActions.GetStorageOk:            
            return action.payload;            

        case EStorageActions.GetStorageError:
            return state;

        default:
            return state;
    }

}
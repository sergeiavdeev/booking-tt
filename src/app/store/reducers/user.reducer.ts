import { EUserActions, UserActions } from "../actions/user.actions";
import { IUserState, initialUserState } from "../state/user.state";

export const userReducer = (
    state = initialUserState,
    action: UserActions 
): IUserState => {
    
    switch(action.type) {

        case EUserActions.GetInfo:
            return state;
        case EUserActions.GetInfoOk:
            return {
                ...state,
                uuid: action.payload.uuid,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                roles: action.payload.roles
            }
        case EUserActions.GetInfoError:
            return {
                ...state,
                uuid: "",
                firstName: "",
                lastName: "",
                roles: []
            }
        case EUserActions.Clear:
            return {
                ...state,
                uuid: "",
                firstName: "",
                lastName: "",
                roles: []
            }
        default:
            return state;
    }
}
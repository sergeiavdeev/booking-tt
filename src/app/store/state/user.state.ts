export interface IUserState {
    uuid: String
    firstName: String;
    lastName: String;
    roles: String[];
}

export const initialUserState: IUserState = {
    uuid: "",
    firstName: "",
    lastName: "",
    roles: []
}
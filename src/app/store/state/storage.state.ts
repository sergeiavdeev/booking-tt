export interface IContactType {
    id: String;
    name: String;
}

export interface IContact {
    id: String;
    type: IContactType;
    value: String;
    valueExt: String;    
}

export interface IResource {
    id: String;
    name: String;
    description: String;
}

export interface IStorageState {
    id: String;
    owner: String;
    name: String;
    address: String;
    lat: Number;
    lng: Number;
    description: String;
    contacts?: IContact[];
    resources?: IResource[];
}

export const initialStorageState: IStorageState = {
    
    id: "",
    owner: "",
    name: "",
    address: "",
    lat: 0,
    lng: 0,
    description: "",
    contacts: [],
    resources: []
}
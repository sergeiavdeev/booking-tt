import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { IUserState } from "../store/state/user.state";

@Injectable({providedIn: 'root'})
export class UserService {

    constructor(private http: HttpClient) {}

    getUserInfo() : Observable<IUserState> {
        
        return this.http.get<IUserState>("/user/info")
        .pipe(map((info) => info));
    }
}
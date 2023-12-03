import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { IUserState } from "../store/state/user.state";
import { env } from "src/environments/environments";

@Injectable({providedIn: 'root'})
export class UserService {

    private apiPath = env.apiServer;

    constructor(private http: HttpClient) {}

    getUserInfo() : Observable<IUserState> {
        
        return this.http.get<IUserState>(this.apiPath + "/user/info")
        .pipe(map((info) => info));
    }

    logout() : Observable<HttpResponse<any>> {

        return this.http.post<HttpResponse<any>>(this.apiPath + "/logout", "")
        .pipe(map((response) => response));
    }
}
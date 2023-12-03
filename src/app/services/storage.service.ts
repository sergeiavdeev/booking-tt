import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IStorageState } from "../store/state/storage.state";
import { Observable } from "rxjs";
import { env } from "src/environments/environments";

@Injectable({providedIn: 'root'})
export class StorageService {
    
    private apiPath: String;

    constructor(private http: HttpClient) {
        this.apiPath = env.apiServer + env.apiVersion;
    }

    getStorage(id: String): Observable<IStorageState> {

        return this.http.get<IStorageState>(this.apiPath + "/storage/" + id)
        .pipe((storage) => storage);
    }
}
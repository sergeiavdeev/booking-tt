import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import { Observable, catchError, map, throwError } from "rxjs";

const dev = {
    "date": "2023-12-01",
    "timeIntervals": [
        {
            "startTime": "06:00:00",
            "endTime": "12:00:00"
        },
        {
            "startTime": "14:00:00",
            "endTime": "23:00:00"
        }
    ]
}

const url = "http://localhost:8083/api/v1/calendar/416f98f9-c1d2-43d7-9de8-877dc28e231e/deviation"
//const url = "http://localhost:8085/post"

@Injectable({providedIn: 'root'})
export class DeviationService {

    constructor(private http: HttpClient) {
    }

    addDeviation(): Observable<HttpResponse<any>> {
        
        return this.http.post<any>(url, dev, {observe: 'response'})
            .pipe(
                map((response: HttpResponse<any>) => {
                    var a = 1;
                    //console.log(response);    
                    return response;
                })
            )
    }
}
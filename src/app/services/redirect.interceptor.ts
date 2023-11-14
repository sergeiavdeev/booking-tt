import { HttpErrorResponse, HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, filter, map, throwError } from "rxjs";

@Injectable()
export class RedirectInterceptor implements HttpInterceptor {
    constructor() {}

    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const cloned = request.clone({
            headers: request.headers.set("X-Requested-With", "XMLHttpRequest")
        });
        console.log("Set request headers");
        
        return next.handle(cloned);
    }    
}
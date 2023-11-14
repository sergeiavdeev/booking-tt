import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAppState } from "../store/state/app.state";

@Injectable()
export class HttpErrorHandler implements ErrorHandler {

    constructor(private store: Store<IAppState>) {

    }

    handleError(error: HttpErrorResponse) {
      console.log("Handle error:");  
      console.log(typeof(error));
      console.log(error);
      if (error.status === 401 || error.status === 403) {
        window.location.href = "/oauth2/authorization/keycloak";
      }
    }
  }
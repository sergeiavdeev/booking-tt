import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class HttpErrorHandler implements ErrorHandler {

    constructor() {

    }

    handleError(error: HttpErrorResponse) {
      console.log("Handle error:");  
      console.log(typeof(error));
      console.log(error);
      if (error.status === 401 || error.status === 403) {
        //window.location.href = "/oauth2/authorization/keycloak";
      }
    }
  }
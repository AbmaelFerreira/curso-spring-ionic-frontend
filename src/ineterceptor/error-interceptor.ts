import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { empty, Observable, throwError } from "rxjs";
import { error } from 'console';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    handleError(error: HttpErrorResponse){
        let  errorObj = error.error;
              
        console.log(errorObj);
        return throwError(errorObj);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Passou pelo Interceptor')
        const headers = new HttpHeaders({
            'Authorization': 'AbmaelFerreira'
        })
        return next.handle(req)
        .pipe(
            catchError(this.handleError)
        );
       
        }
    }

    


 /*export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};

*/
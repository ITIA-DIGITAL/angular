import {
    HTTP_INTERCEPTORS,
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';

import { catchError, delay, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { NotificationsService } from './@notifications/services';
import { NotificationIcon, NotificationType } from './@notifications/enums';

/**
 * Checkout:
 * https://scotch.io/bar-talk/error-handling-with-angular-6-tips-and-best-practices192
 */
@Injectable()
export class IDGConnectHttpInterceptor implements HttpInterceptor {
    constructor(private notifications: NotificationsService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMessage = '';
                if (error.error instanceof ErrorEvent) {
                    // client-side error
                    this.notifications.add({
                        type: NotificationType.Error,
                        icon: NotificationIcon.Error,
                        message: error.error.error,
                        raw: error.error,
                        code: 'LOCAL',
                        id: null,
                    });
                    errorMessage = `Error: ${error.error.error}`;
                } else {
                    const type: NotificationType =
                        error.status >= 500
                            ? NotificationType.Remote5XX
                            : error.status === 422
                            ? NotificationType.Remote422
                            : NotificationType.Unknown;

                    // server-side error
                    this.notifications.add({
                        message: error.error ? error.error.error : error.statusText,
                        icon: NotificationIcon.ConnectionError,
                        code: error.status,
                        raw: error,
                        id: null,
                        type,
                    });
                    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                }
                return throwError(errorMessage);
            })
        );
    }
}

@NgModule({
    providers: [
        {
            useClass: IDGConnectHttpInterceptor,
            provide: HTTP_INTERCEPTORS,
            multi: true,
        },
    ],
})
export class IDGConnectHttpInterceptorModule {}

import {
    HTTP_INTERCEPTORS,
    HttpErrorResponse,
    HttpHandler,
    HttpRequest,
    HttpInterceptor,
    HttpEvent
} from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';

import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { IDGNotificationsService } from './@notifications/services';
import { NotificationIcon, NotificationType } from './@notifications/enums';
import { msgFrom422 } from './@notifications/functions';

/**
 * Checkout:
 * https://scotch.io/bar-talk/error-handling-with-angular-6-tips-and-best-practices192
 */
@Injectable()
export class IDGConnectHttpInterceptor implements HttpInterceptor {
    constructor(private notifications: IDGNotificationsService) {}

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
                        durationMs: 3000,
                        raw: error.error,
                        code: 'LOCAL',
                        id: null
                    });
                    errorMessage = `Error: ${error.error.error}`;
                } else {
                    const type: NotificationType =
                        error.status >= 500
                            ? NotificationType.Remote5XX
                            : error.status === 422
                            ? NotificationType.Remote422
                            : error.status === 400
                            ? NotificationType.Remote400
                            : error.status === 401
                            ? NotificationType.Remote401
                            : NotificationType.Unknown;
                    const icon: NotificationIcon =
                        error.status >= 500
                            ? NotificationIcon.Bug
                            : error.status === 422
                            ? NotificationIcon.Data
                            : error.status === 401
                            ? NotificationIcon.Auth
                            : error.status === 400
                            ? NotificationIcon.SyncError
                            : NotificationIcon.Cloud;
                    const message: string =
                        error.status >= 500
                            ? `${error.status} Remote bug found, check log for more details.. T_T`
                            : error.status === 422
                            ? `${msgFrom422(error.error)}.. \\O/`
                            : error.status === 401
                            ? 'Close session and retry.. :/'
                            : error.status === 400
                            ? 'Not very good request.. :('
                            : `${error.error ? error.error.error : error.statusText}.. :S`;

                    // server-side error
                    this.notifications.add({
                        code: error.status,
                        durationMs: 3000,
                        raw: error,
                        id: null,
                        message,
                        type,
                        icon
                    });

                    console.error(error.error ? error.error : error.statusText);
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
            multi: true
        }
    ]
})
export class IDGConnectHttpInterceptorModule {}

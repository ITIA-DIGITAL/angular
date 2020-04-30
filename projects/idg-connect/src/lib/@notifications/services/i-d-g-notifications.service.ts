import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

import { StoreService } from '../../@connect/services';
import { NotificationType } from '../enums';
import { Notification } from '../models';
import { select$ } from '../../@rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class IDGNotificationsService extends StoreService<Notification[]> {
    private remote2XX$: Observable<Notification[]>;
    private remote400$: Observable<Notification[]>;
    private remote401$: Observable<Notification[]>;
    private remote422$: Observable<Notification[]>;
    private remote5XX$: Observable<Notification[]>;
    private success$: Observable<Notification[]>;
    private errors$: Observable<Notification[]>;

    private select$ = (type: NotificationType) => select$(this.State$, n => n.filter(item => item.type === type));

    get Remote2XX$(): Observable<Notification[]> {
        if (!this.remote2XX$) {
            this.remote2XX$ = this.select$(NotificationType.Remote2XX);
        }
        return this.remote2XX$;
    }

    get Remote400$(): Observable<Notification[]> {
        if (!this.remote400$) {
            this.remote400$ = this.select$(NotificationType.Remote400);
        }
        return this.remote400$;
    }

    get Remote401$(): Observable<Notification[]> {
        if (!this.remote401$) {
            this.remote401$ = this.select$(NotificationType.Remote401);
        }
        return this.remote401$;
    }

    get Remote422$(): Observable<Notification[]> {
        if (!this.remote422$) {
            this.remote422$ = this.select$(NotificationType.Remote422);
        }
        return this.remote422$;
    }

    get Remote5XX$(): Observable<Notification[]> {
        if (!this.remote5XX$) {
            this.remote5XX$ = this.select$(NotificationType.Remote5XX);
        }
        return this.remote5XX$;
    }

    get Errors$(): Observable<Notification[]> {
        if (!this.errors$) {
            this.errors$ = this.select$(NotificationType.Error);
        }
        return this.errors$;
    }

    get Success$(): Observable<Notification[]> {
        if (!this.success$) {
            this.success$ = this.select$(NotificationType.Success);
        }
        return this.success$;
    }

    constructor(public snack: MatSnackBar) {
        super([]);
    }

    add(n: Notification, emit = false) {
        this.set([n, ...this.State]);

        this.snack.open(n.message, 'OK', {
            duration: 4000
        });
    }

    remove(n: Notification) {
        this.set(this.State.filter(s => s !== n));
    }

    clear() {
        this.set([]);
    }
}

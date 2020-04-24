import { ActivatedRoute, Router } from '@angular/router';
import { Input, OnDestroy, OnInit } from '@angular/core';

import { switchMap, take } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { AbstractComponent } from './abstract.component';
import { ConnectionFetchService } from '../services';
import { ConnectionQueryParam, IData } from '../models';

/**
 * Service to fetch data from one record:
 * - Route query params: [:slug, :id]
 * - Input() data: if numeric then fetch :by id else uses data.
 */
export abstract class AbstractFindComponent<MODEL extends IData, QUERY extends ConnectionQueryParam>
    extends AbstractComponent
    implements OnInit, OnDestroy {
    /**
     * Route param name, to look for over
     * route query params
     */
    @Input() routeParamName: string = null;
    /**
     * Data as param to avoid remote request
     */
    @Input() data: MODEL | number | string;

    protected constructor(public service: ConnectionFetchService<MODEL, QUERY>, public ar: ActivatedRoute) {
        super(ar);
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.setupDataSource();
    }

    /**
     * Set connection to async fetched data from service
     */
    protected setupDataSource(): void {
        if (this.data) {
            if (+this.data) {
                this.find(+this.data).subscribe();
            }
        } else {
            // Make request for current DataSource
            this.urlParams
                .pipe(
                    switchMap((params: any) =>
                        params[this.routeParamName] || params.id || params.slug
                            ? this.find(params[this.routeParamName] || params.id || params.slug)
                            : throwError(
                                  `No :id, :slug, :${this.routeParamName} parameter present on route or data input parameter`
                              )
                    )
                )
                .pipe(take(1))
                .subscribe();
        }
    }

    protected find(id: number | string): Observable<MODEL> {
        return this.service.get(id);
    }
}

import { AbstractFindComponent } from './abstract.find.component';
import { ConnectionQueryParam, IData } from '../models';
import { OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export abstract class AbstractFormComponent<MODEL extends IData, QUERY extends ConnectionQueryParam>
    extends AbstractFindComponent<MODEL, QUERY>
    implements OnInit, OnDestroy {
    abstract get form(): FormControl;
}

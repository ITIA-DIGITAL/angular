import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IDGMatModule } from '@itia-digital/material';

import { ConnectService } from './connect.service';
import { ConnectRouting } from './connect.routing';

@NgModule({
    declarations: [],
    imports: [CommonModule, ConnectRouting, IDGMatModule],
    providers: [ConnectService]
})
export class ConnectModule {}

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';
import { LayoutModule } from './layout/layout.module';
import { AppComponent } from './app.component';
import { IDGMatModule } from '@idg/mat';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRouting, BrowserAnimationsModule, LayoutModule, IDGMatModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}

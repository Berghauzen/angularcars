import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CarsModule} from './cars/cars.module';
import {CarsService} from './cars/cars.service';
import {FormsModule} from '@angular/forms';
import {CoreModule} from './core-module/core.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {CarsRoutingModule} from './cars/cars-routing.module';
import { NAZWAPPipe } from './SCIEZKA/nazwa-p.pipe';
import { NAZWAPIPEPipe } from './SCIEZKA/nazwa-pipe.pipe';
import { SurnameShortcutPipe } from './shared-module/pipes/surname-shortcut.pipe';
import { ImportantDirective } from './shared-module/directives/important.directive';


@NgModule({
  declarations: [
    AppComponent,
    NAZWAPPipe,
    NAZWAPIPEPipe,
    SurnameShortcutPipe,
    ImportantDirective
  ],
  imports: [
    BrowserModule,
    CarsModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    AppRoutingModule,
    CarsRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

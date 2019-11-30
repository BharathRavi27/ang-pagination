import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AngPaginationModule } from 'ang-pagination';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

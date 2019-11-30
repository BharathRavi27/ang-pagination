import { NgModule } from '@angular/core';
import { AngPaginationComponent } from './ang-pagination.component';
import { PaginationsPipe } from './ang-pagination.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [AngPaginationComponent, PaginationsPipe],
  imports: [BrowserModule, CommonModule],
  exports: [AngPaginationComponent, PaginationsPipe]
})
export class AngPaginationModule { }

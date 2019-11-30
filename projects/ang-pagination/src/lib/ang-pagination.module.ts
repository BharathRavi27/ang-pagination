import { NgModule } from '@angular/core';
import { AngPaginationComponent } from './ang-pagination.component';
import { AngPaginationPipe } from './ang-pagination.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [AngPaginationComponent, AngPaginationPipe],
  imports: [BrowserModule, CommonModule],
  exports: [AngPaginationComponent, AngPaginationPipe]
})
export class AngPaginationModule { }

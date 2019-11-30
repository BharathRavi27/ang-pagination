import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngPaginationService } from './ang-pagination.service';

@Component({
  selector: 'ang-pagination',
  templateUrl: './ang-pagination.component.html',
  styleUrls: ['./ang-pagination.component.scss']
})
export class AngPaginationComponent implements OnInit {

  constructor(public dataService: AngPaginationService) {
  }

  @Input('totalItems') totalItems: number;
  @Output() pageChanged = new EventEmitter<number>();

  totalPages: number;
  ngOnInit() {
    let roundPages = Math.floor(this.totalItems / this.dataService.itemsPerPage);
    let reminderPage = this.totalItems % this.dataService.itemsPerPage;
    reminderPage > 0 ? this.totalPages = roundPages + 1 : this.totalPages = roundPages;
  }
  get getTotalPages() {
    let roundPages = Math.floor(this.totalItems / this.dataService.itemsPerPage);
    let reminderPage = this.totalItems % this.dataService.itemsPerPage;
    reminderPage > 0 ? this.totalPages = roundPages + 1 : this.totalPages = roundPages;
    return this.totalPages;
  }
  changePage(pageNumber) {
    if (pageNumber <= this.totalPages) {
      this.dataService.page = pageNumber;
      this.pageChanged.emit(this.dataService.page);
    }
  }

}

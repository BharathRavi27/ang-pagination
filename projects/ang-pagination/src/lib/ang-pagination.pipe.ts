import { Pipe, PipeTransform } from '@angular/core';
import { AngPaginationService } from './ang-pagination.service';

// Option interface
interface Options {
  itemsPerPage: number
}

@Pipe({
  name: 'angPagination',
  pure: false
})
export class AngPaginationPipe implements PipeTransform {
  constructor(public angService: AngPaginationService) { }
  transform(value: any[], options: Options): any {
    // set items per page
    this.angService.itemsPerPage = Number(options.itemsPerPage);
    // setting total items in service
    this.angService.totalItems = value.length;
    const start = (this.angService.page - 1) * this.angService.itemsPerPage;
    const end = start + this.angService.itemsPerPage;
    // return sliced items
    return value.slice(start, end);
  }

}

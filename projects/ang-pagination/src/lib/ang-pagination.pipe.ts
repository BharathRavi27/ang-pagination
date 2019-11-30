import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from './ang-pagination.service';

@Pipe({
  name: 'pagination',
  pure: false
})
export class PaginationsPipe implements PipeTransform {
  constructor(public dataService: DataService) { }
  transform(value: any[]): any {
    this.dataService.totalItems = value.length;
    const start = (this.dataService.page - 1) * this.dataService.itemsPerPage;
    const end = start + this.dataService.itemsPerPage
    return value.slice(start, end);
  }

}

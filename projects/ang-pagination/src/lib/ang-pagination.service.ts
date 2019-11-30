import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngPaginationService {
  page: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  constructor() { }
}

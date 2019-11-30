import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  page: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  constructor() { }
}

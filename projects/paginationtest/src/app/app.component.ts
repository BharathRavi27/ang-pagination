import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'paginationtest';
  itemsPerPage: number = 5;
  constructor(private http: HttpClient) { }
  data: any[] = [];
  ngOnInit() {
    this.http.get<any[]>("https://jsonplaceholder.typicode.com/posts").subscribe(data => {
      // this.data = data;
    })
  }
  updateItemsPerpage(e) {

    console.log(this.itemsPerPage)
  }
  pageChanged(e) {
    debugger
  }

}

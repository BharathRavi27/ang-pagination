# ang-pagination --- Pagination for Angular

A simple lightweight package for managing pagination inside angular applications.

## Demo

Play with it on StackBlitz here: https://stackblitz.com/edit/ang-pagination


## Quick Start

```
npm install ang-pagination --save
```

## Simple Example

```TypeScript
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngPaginationModule } from 'ang-pagination';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

```TypeScript
// app.component.ts
import {Component} from '@angular/core';

@Component({
    selector: 'app-component',
    template: `
            <tbody>
              <tr *ngFor="let item of data | angPagination: { itemsPerPage: 5 }">
                <td>{{item.id}}</td>
                <td>{{item.title}}</td>
                <td>{{item.body}}</td>
              </tr>
            </tbody>
               
    <ang-pagination (pageChanged)="pageChanged($event)" [totalItems]="data.length"></ang-pagination>
    `
})
export class MyComponent {
    itemsPerPage: number = 5;
    data: any[] = [{"id": 1,"title": "sunt facere "},{"id": 2,"title": "qui e"}]; // any array

  pageChanged(e) {
      // do things on page change
  }
}
```

## License

MIT

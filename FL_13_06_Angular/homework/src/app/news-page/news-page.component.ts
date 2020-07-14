import { Component } from '@angular/core';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css'],
})

export class NewsPageComponent {

  filters = ''

  constructor() {}

  filterNews(filters){
    this.filters = filters;
  };
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HackerNewsAPIService } from '../hackernews-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  items: number[];
  storiesType;
  pageNum: number;
  listStart: number;

  constructor(
    private hackerNewsAPIService: HackerNewsAPIService,
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe(
      data => (this.storiesType = (data as any).storiesType)
    );

    this.route.params.subscribe(params => {
      this.pageNum = +params.page || 1;

      this.hackerNewsAPIService
        .fetchStories(this.storiesType, this.pageNum)
        .subscribe(
          items => (this.items = items),
          error => console.log('Error fetching' + this.storiesType + 'stories'),
          () => (this.listStart = (this.pageNum - 1) * 30 + 1)
        );
    });
  }

  ngOnInit() {}
}

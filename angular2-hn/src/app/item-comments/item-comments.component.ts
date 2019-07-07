import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HackerNewsAPIService } from './../hackernews-api.service';

@Component({
  selector: 'app-item-comments',
  templateUrl: './item-comments.component.html',
  styleUrls: ['./item-comments.component.scss']
})
export class ItemCommentsComponent implements OnInit {
  item: any;

  constructor(
    private hackerNewsAPIService: HackerNewsAPIService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const itemID = +params.id;

      this.hackerNewsAPIService.fetchComments(itemID).subscribe(
        data => {
          this.item = data;
        },
        error => console.log(`Could not load item ${itemID}`)
      );
    });
  }
}

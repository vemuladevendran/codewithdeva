import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  @Input() topic = '';
  @Input() description = '';
  @Input() createdTime = '';
  @Input() images = '';
  @Input() viewCount = '';
  @Input() shareCount = '';


  constructor(
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

  getDescription(htmlStr: string): string {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(htmlStr, 'text/html');
    return htmlDoc.body.innerText;
  }

}

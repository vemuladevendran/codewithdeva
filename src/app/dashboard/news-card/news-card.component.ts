import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  topice = ['science'];

  description = [' urfu euubvh uhebhuv urfueuu bvhu hebhuv urfu euubvh uhebhuv urfueuu bvhu hebhuvurfu euubvh uhebhuv urfueuu bvhu hebhuv urfu euubvh uhebhuv urfueuu bvhu hebhuv']

  creator = ['devendran']
  constructor() { }

  ngOnInit(): void {
  }

}

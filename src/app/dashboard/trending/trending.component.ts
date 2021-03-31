import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  data: any[] = [];
  pagecount = 1;

  constructor(
    private router: Router,
    private http: HttpClient,

  ) { }

  ngOnInit(): void {
    this.loadNews();
  }

  pageIncrease(): void {
    this.pagecount = this.pagecount + 1;
  }


  private async loadNews(): Promise<void> {
    try {
      const result = await this.http.get<any>('https://tamilpokkishamapp.com:3000/api/v2/web/topics-by-category?page=0&category=தமிழ் வரலாறு').toPromise();
      this.data = result.data;
    } catch (error) {
      console.error(error);

    }
  }
}



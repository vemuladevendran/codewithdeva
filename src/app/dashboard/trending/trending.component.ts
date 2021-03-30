import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  data: any[] = [];

  constructor(
    private http: HttpClient,

  ) { }

  ngOnInit(): void {
   this.loadNews();
  }


  private async loadNews(): Promise<void> {
    try {
      const result = await this.http.get<any>('https://tamilpokkishamapp.com:3000/api/v2/web/topics-by-category?page=1&category=தமிழ் வரலாறு').toPromise();
      console.dir(result.data);
      this.data = result.data;
    } catch (error) {
      console.error(error);

    }
  }
}



import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data: any[] = [];

  constructor(
    private http: HttpClient,

  ) { }

  ngOnInit(): void {
    this.loadNews();
  }


  private async loadNews(): Promise<void> {
    try {
      const result = await this.http.get<any>('https://tamilpokkishamapp.com:3000/api/v2/web/categories').toPromise();
      this.data = result.data;

    } catch (error) {
      console.error(error);

    }
  }


}

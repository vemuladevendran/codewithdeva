import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { promise } from 'selenium-webdriver';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  images = ['assets/image-1.jpeg', 'assets/image-2.jpeg'];


  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    // this.loadNews();
  }

  // private async loadNews(): Promise<void> {
  //   try {
  //     const data = await this.http.get<any[]>('https://tamilpokkishamapp.com:3000/api/v2//web/get-top-categories').toPromise();
      
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);

  //   }
  // }
}

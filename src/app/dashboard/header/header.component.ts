import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data: any[] = [];
  navlinks = ['உலக அரசியல', 'அறிவியல்', 'விண்வெளி', 'தமிழ் வரலாறு', 'ராணுவம்', 'தமிழ் செய்திகள்', 'இதர படைப்புகள்', 'தமிழ் பொக்கிஷம்', 'English News'];
  navtitle = ['World Politics', 'Science', 'Space', 'Tamil History', 'Army', 'Tamil News', 'Other Works', 'Tamil Treasure', 'English News'];
  header = 'block';
  sidenav = 'none';
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


  openSideNav(): void {
    this.header = 'none';
    this.sidenav = 'block';
  }

  closeSideNav(): void {
    this.header = 'block';
    this.sidenav = 'none';
  }

}

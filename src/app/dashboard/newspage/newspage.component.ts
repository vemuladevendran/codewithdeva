import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { promise } from 'selenium-webdriver';
import { SavedNewsService } from 'src/app/saved-news.service';

enum TextSize {
  SMALL = '16px',
  MEDIUM = '20px',
  LARGE = '23px',
}


@Component({
  selector: 'app-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.css']
})
export class NewspageComponent implements OnInit {
  textSizeOptions = TextSize;
  selectedFontSize = TextSize.SMALL;
  data: any[] = [];
  newsData: any;
  newsId: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private savedNewsService: SavedNewsService,


  ) { }

  ngOnInit(): void {
    this.loadNews();
  }


  getDescription(htmlStr: string): string {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(htmlStr, 'text/html');
    return htmlDoc.body.innerText;
  }

  // font size
  normalfont(value: TextSize): void {
    this.selectedFontSize = value;
  }

  // news

  private async loadNews(): Promise<void> {
    try {
      const id = this.route.snapshot.paramMap.get('id');
      const result = await this.http.get<any>(`https://tamilpokkishamapp.com:3000/api/v2/web/topic/${id}`).toPromise();
      this.data = result.data;
      console.log(this.data);
    } catch (error) {
      console.error(error);

    }
  }

  saveNews(): any {
    this.newsId = this.route.snapshot.paramMap.get('id');
    this.savedNewsService.getUserId(this.newsId);
  }



}


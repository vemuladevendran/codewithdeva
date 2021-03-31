import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  data: any[] = [];
  pagecount: any = 0;
  category = '';

  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
  ) {
    this.route.queryParamMap.subscribe((paramMap) => {
      if (!paramMap.get('categorie')) {
        this.router.navigate(['./'], { queryParams: { categorie: 'தமிழ் வரலாறு'}})
        return;
      }

      this.category = paramMap.get('categorie') as string;
      this.pagecount = 0;
      this.loadNews();
    })
  }

  ngOnInit(): void {
  }

  pageIncrease(): void {
    if (this.pagecount === 0) {
      this.pagecount += 1;
      this.loadNews();
    } else {
      window.alert('no more pages available')

    }
  }


  private async loadNews(): Promise<void> {
    try {
      const opts = {
        params: {
          page: this.pagecount,
          category: this.category,
        }
      };
      // fromString: "page=0&category=தமிழ் வரலாறு"}
      const result = await this.http.get<any>('https://tamilpokkishamapp.com:3000/api/v2/web/topics-by-category', opts).toPromise();
      this.data = result.data;
    } catch (error) {
      console.error(error);

    }
  }
}



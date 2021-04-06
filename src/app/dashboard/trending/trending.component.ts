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
  pageData: any[] = [];
  pagecount: any = 0;
  category = '';
  displayLoader = false;
  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
  ) {
    this.route.queryParamMap.subscribe((paramMap) => {
      if (!paramMap.get('categorie')) {
        this.router.navigate(['./'], { queryParams: { categorie: 'தமிழ் வரலாறு' } })
        return;
      }

      this.category = paramMap.get('categorie') as string;
      this.pagecount = 0;
      this.data = [];
      this.loadNews();
    });
  }

  ngOnInit(): void {
  }

  pageIncrease(): void {

    if (this.pageData.length === 0) {
      window.alert('no more pages available');
    } else {
      this.pagecount += 1;
      this.loadNews();
    }



  }


  private async loadNews(): Promise<void> {
    this.displayLoader = true;
    try {
      const opts = {
        params: {
          page: this.pagecount,
          category: this.category,
        }
      };
      const result = await this.http.get<any>('https://tamilpokkishamapp.com:3000/api/v2/web/topics-by-category', opts).toPromise();
      this.pageData = result.data;
      this.data.push(...this.pageData);
    } catch (error) {
      console.error(error);

    }
    finally {
      this.displayLoader = false;
    }
  }
}



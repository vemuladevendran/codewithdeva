import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-savednews',
  templateUrl: './savednews.component.html',
  styleUrls: ['./savednews.component.css']
})
export class SavednewsComponent implements OnInit {
  data: any[] = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loadSavedNews();
  }

 private async loadSavedNews(): Promise<void> {
  try {
    const id = this.route.snapshot.paramMap.get('id');
    const result = await this.http.get<any>(`https://tamilpokkishamapp.com:3000/api/v2/web/topic/${id}`).toPromise();
    this.data.push(result.data);
  } catch (error) {
    console.error(error);

  }
 }

}

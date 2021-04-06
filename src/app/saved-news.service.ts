import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SavedNewsService {

  newsId: any[] = [];


  constructor() { }

  getUserId(id: string): void {
    this.newsId.push(id);
  }

}

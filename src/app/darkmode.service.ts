import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {

  constructor() { }



  renderDarkMode(value: boolean): void {
    if (value) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

  }
}




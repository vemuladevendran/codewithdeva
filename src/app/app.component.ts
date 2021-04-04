import { Component } from '@angular/core';
import { DarkmodeService } from './darkmode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CodeWithDeva';


  constructor(
    private darkModeService: DarkmodeService,
  ) { }

  ngOnInit(): void {
    this.darkModeService.renderDarkMode(!!+(localStorage.getItem('darkMode') as any));
  }
}

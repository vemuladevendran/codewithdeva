import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DarkmodeService } from 'src/app/darkmode.service';

// import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  darkModeCtrl = new FormControl(!!+(localStorage.getItem('darkMode') as any));
  constructor(
    darkModeService: DarkmodeService,

  ) {
    this.darkModeCtrl.valueChanges.subscribe({
      next: (value: any) => {
        darkModeService.renderDarkMode(value);
        localStorage.setItem('darkMode', (value ? 1 : 0) as any);
      },
    });
  }


  ngOnInit(): void {
  }


}

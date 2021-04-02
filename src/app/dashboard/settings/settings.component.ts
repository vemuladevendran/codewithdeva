import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

// import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  darkModeCtrl = new FormControl(!!+(localStorage.getItem('darkMode') as any) );

  constructor(
  ) {
    this.darkModeCtrl.valueChanges.subscribe({
      next: (value: any) => {
        this.renderDarkMode(value);
        localStorage.setItem('darkMode', (value ? 1 : 0) as any);
      },
    });
  }

  private renderDarkMode(value: boolean): void {
    if (value) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  ngOnInit(): void {
    this.renderDarkMode(!!+(localStorage.getItem('darkMode') as any));
  }



}

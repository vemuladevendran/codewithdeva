import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {



  constructor(
    // formcontrol: FormControl,
  ) { }

  ngOnInit(): void {
    this.checkToggel();
  }

  checkToggel(): void {
   const x = document.getElementById('flexSwitchCheckDefault');
   console.log(x);
  }

}

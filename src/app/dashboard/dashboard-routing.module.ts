import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NewspageComponent } from './newspage/newspage.component';
import { SettingsComponent } from './settings/settings.component';
import { TrendingComponent } from './trending/trending.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: TrendingComponent,
      },
      {
        path: ':id/newspage',
        component: NewspageComponent,
      },
      {
        path: ':settings',
        component: SettingsComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

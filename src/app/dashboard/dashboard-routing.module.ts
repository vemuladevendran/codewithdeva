import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NewspageComponent } from './newspage/newspage.component';
import { TrendingComponent } from './trending/trending.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'trending',
        component: TrendingComponent,
      },
      {
        path: 'newspage',
        component: NewspageComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

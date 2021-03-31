import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TrendingComponent } from './trending/trending.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewspageComponent } from './newspage/newspage.component';
import { SettingsComponent } from './settings/settings.component';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  declarations: [DashboardComponent, HeaderComponent, FooterComponent, TrendingComponent, NewsCardComponent, NewspageComponent, SettingsComponent, SidenavComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

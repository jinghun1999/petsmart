import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbCarouselModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {PageHeaderModule, StatModule} from '../../shared';
import { StockComponent } from './stock/stock.component';
import { AiderComponent } from './aider/aider.component';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    NgbModule.forRoot(),
    DashboardRoutingModule,
    StatModule,
    PageHeaderModule
  ],
  declarations: [DashboardComponent, StockComponent, AiderComponent]
})
export class DashboardModule {
}

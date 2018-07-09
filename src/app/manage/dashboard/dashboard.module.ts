import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbCarouselModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {PageHeaderModule, StatModule} from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    DashboardRoutingModule,
    StatModule,
    PageHeaderModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}

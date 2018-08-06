import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HospitalComponent } from './hospital.component';
import { HospitalRoutingModule } from './hospital-routing.module';
import {PageHeaderModule} from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    HospitalRoutingModule,
    PageHeaderModule,
    NgbModule.forRoot(),
  ],
  declarations: [HospitalComponent]
})
export class HospitalModule { }

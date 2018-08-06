import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiseaseComponent } from './disease.component';
import { DiseaseRoutingModule } from './disease-routing.module';
import {PageHeaderModule} from '../../shared';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    PageHeaderModule,
    DiseaseRoutingModule
  ],
  declarations: [DiseaseComponent]
})
export class DiseaseModule { }

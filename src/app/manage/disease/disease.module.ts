import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiseaseComponent } from './disease.component';
import { DiseaseRoutingModule } from './disease-routing.module';
import {PageHeaderModule} from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    PageHeaderModule,
    DiseaseRoutingModule
  ],
  declarations: [DiseaseComponent]
})
export class DiseaseModule { }

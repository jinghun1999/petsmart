import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiseaseComponent } from './disease.component';
import { DiseaseRoutingModule } from './disease-routing.module';
import {PageHeaderModule} from '../../shared';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { DiseaseEditComponent } from './disease-edit/disease-edit.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    PageHeaderModule,
    DiseaseRoutingModule,
    FormsModule
  ],
  declarations: [DiseaseComponent, DiseaseEditComponent]
})
export class DiseaseModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {DrugRoutingModule} from './drug-routing.module';
import {PageHeaderModule} from '../../shared';
import {DrugComponent} from './drug.component';
import { DrugEditComponent } from './drug-edit/drug-edit.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    PageHeaderModule,
    DrugRoutingModule,
    FormsModule
  ],
  declarations: [DrugComponent, DrugEditComponent]
})
export class DrugModule { }

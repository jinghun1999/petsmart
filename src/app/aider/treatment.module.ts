import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TreatmentComponent} from './treatment.component';
import {TreatmentRoutingModule} from './treatment-routing.module';

import {ChoosePetComponent} from './choose-pet/choose-pet.component';
import {ChooseLabelComponent} from './choose-label/choose-label.component';
import {ResultComponent} from './result/result.component';
import { MedicateComponent } from './medicate/medicate.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    TreatmentRoutingModule,
  ],
  declarations: [TreatmentComponent, ChoosePetComponent, ChooseLabelComponent, ResultComponent, MedicateComponent]
})
export class TreatmentModule {
}

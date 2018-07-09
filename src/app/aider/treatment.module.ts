import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TreatmentComponent} from './treatment.component';
import {TreatmentRoutingModule} from './treatment-routing.module';

import {ChoosePetComponent} from './choose-pet/choose-pet.component';
import {ChooseLabelComponent} from './choose-label/choose-label.component';
import {AnalyzeResultComponent} from './analyze-result/analyze-result.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    TreatmentRoutingModule,
  ],
  declarations: [TreatmentComponent, ChoosePetComponent, ChooseLabelComponent, AnalyzeResultComponent]
})
export class TreatmentModule {
}

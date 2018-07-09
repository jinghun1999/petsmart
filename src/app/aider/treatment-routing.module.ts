import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TreatmentComponent} from './treatment.component';
import {ChoosePetComponent} from './choose-pet/choose-pet.component';
import {ChooseLabelComponent} from './choose-label/choose-label.component';
import {AnalyzeResultComponent} from './analyze-result/analyze-result.component';
import {AuthGuard} from '../_guard';

const routes: Routes = [
  {
    path: '',
    component: TreatmentComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'choose-pet', pathMatch: 'full'},
      {path: 'choose-pet', component: ChoosePetComponent, canActivate: [AuthGuard]},
      {path: 'choose-label/:id', component: ChooseLabelComponent, canActivate: [AuthGuard]},
      {path: 'result', component: AnalyzeResultComponent, canActivate: [AuthGuard]}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TreatmentRoutingModule {
}

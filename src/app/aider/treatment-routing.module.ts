import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TreatmentComponent} from './treatment.component';
import {ChoosePetComponent} from './choose-pet/choose-pet.component';
import {ChooseLabelComponent} from './choose-label/choose-label.component';
import {ResultComponent} from './result/result.component';
import {AuthGuard} from '../_guard';
import {MedicateComponent} from './medicate/medicate.component';

const routes: Routes = [
  {
    path: '',
    component: TreatmentComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'choose-pet', pathMatch: 'full'},
      {path: 'choose-pet', component: ChoosePetComponent, canActivate: [AuthGuard]},
      {path: 'choose-label/:id', component: ChooseLabelComponent, canActivate: [AuthGuard]},
      {path: 'result', component: ResultComponent, canActivate: [AuthGuard]},
      {path: 'medicate/:id', component: MedicateComponent, canActivate: [AuthGuard]},
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

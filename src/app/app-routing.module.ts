import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ChoosePetComponent} from './choose-pet/choose-pet.component';
import {ChooseLableComponent} from './choose-lable/choose-lable.component';
import {AnalyzeResultComponent} from './analyze-result/analyze-result.component';

const routes: Routes = [
  { path: '', redirectTo: '/choose-pet', pathMatch: 'full' },
  { path: 'choose-pet', component: ChoosePetComponent },
  { path: 'choose-label/:id', component: ChooseLableComponent },
  { path: 'result', component: AnalyzeResultComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

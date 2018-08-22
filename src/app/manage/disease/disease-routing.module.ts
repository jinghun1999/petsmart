import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DiseaseComponent} from './disease.component';
import {DiseaseEditComponent} from './disease-edit/disease-edit.component';

const routes: Routes = [
  {path: '', component: DiseaseComponent},
  {path: 'edit/:id', component: DiseaseEditComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DiseaseRoutingModule { }

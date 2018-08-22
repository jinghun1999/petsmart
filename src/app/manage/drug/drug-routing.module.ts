import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DrugComponent} from './drug.component';
import {DrugEditComponent} from './drug-edit/drug-edit.component';

const routes: Routes = [
  {path: '', component: DrugComponent},
  {path: 'edit/:id', component: DrugEditComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DrugRoutingModule {}

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from '../_guard/index';
import {ManageComponent} from './manage.component';

const routes: Routes = [
  {
    path: '',
    component: ManageComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard]},
      {path: 'disease', loadChildren: './disease/disease.module#DiseaseModule', canActivate: [AuthGuard]},
      {path: 'hospital', loadChildren: './hospital/hospital.module#HospitalModule', canActivate: [AuthGuard]},
      {path: 'drug', loadChildren: './drug/drug.module#DrugModule', canActivate: [AuthGuard]},
      {path: 'stock', loadChildren: './stock/stock.module#StockModule', canActivate: [AuthGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ManageRoutingModule {
}

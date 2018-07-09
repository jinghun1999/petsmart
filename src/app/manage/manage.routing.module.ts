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
      {path: 'disease', loadChildren: './disease/disease.module#DiseaseModule'},
      {path: 'hospital', loadChildren: './hospital/hospital.module#HospitalModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ManageRoutingModule {
}

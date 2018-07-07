import { Route } from '@angular/router';
import { AuthGuard } from '../_guard/index';
import { ManageComponent } from './manage.component';

export const ManageRoutes: Route[] = [
  {
    path: 'manage',
    component: ManageComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', loadChildren: './home/dashboard.module#DashboardModule'},
    ]
  }
];

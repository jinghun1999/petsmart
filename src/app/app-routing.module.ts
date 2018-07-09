import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: 'homepage', loadChildren: './homepage/homepage.module#HomepageModule'},
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule'},
  {path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule'},
  {path: 'manage', loadChildren: './manage/manage.module#ManageModule'},
  {path: 'aider', loadChildren: './aider/treatment.module#TreatmentModule'},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// import { LoginRoutes} from './login/login.routes';

// import {ChoosePetComponent} from './choose-pet/choose-pet.component';
// import {ChooseLableComponent} from './choose-lable/choose-lable.component';
// import {AnalyzeResultComponent} from './analyze-result/analyze-result.component';

import {AuthGuard} from './_guard/index';

const routes: Routes = [
  {path: '', redirectTo: '/access-denied', pathMatch: 'full'},
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: 'homepage', loadChildren: './homepage/homepage.module#HomepageModule'},
  // { path: 'choose-pet', component: ChoosePetComponent , canActivate: [AuthGuard]},
  // { path: 'choose-label/:id', component: ChooseLableComponent, canActivate: [AuthGuard] },
  // { path: 'result', component: AnalyzeResultComponent, canActivate: [AuthGuard] },
  {path: 'manage', loadChildren: './manage/manage.module#ManageModule'},
  { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
  {path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule'},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

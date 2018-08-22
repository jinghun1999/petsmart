import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {StockComponent} from './stock/stock.component';
import {AiderComponent} from './aider/aider.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'stock', component: StockComponent},
  {path: 'aider', component: AiderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StockComponent} from './stock.component';
import {StockEditComponent} from './stock-edit/stock-edit.component';

const routes: Routes = [
  {path: '', component: StockComponent},
  {path: 'edit/:id', component: StockEditComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class StockRoutingModule { }

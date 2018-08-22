import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StockRoutingModule} from './stock-routing.module';
import {StockComponent} from './stock.component';
import {StockEditComponent} from './stock-edit/stock-edit.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {PageHeaderModule} from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    PageHeaderModule,
    StockRoutingModule,
    FormsModule
  ],
  declarations: [StockComponent, StockEditComponent]
})
export class StockModule {
}

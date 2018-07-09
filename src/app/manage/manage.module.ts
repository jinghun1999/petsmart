import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

import {ManageComponent} from './manage.component';
// import {PageHeaderModule} from '../shared/modules';
import {HeaderComponent} from './components/header/header.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {ManageRoutingModule} from './manage.routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    NgbDropdownModule.forRoot(),
    ManageRoutingModule,
    // PageHeaderModule
  ],
  declarations: [ManageComponent, HeaderComponent, SidebarComponent]
})
export class ManageModule {
}

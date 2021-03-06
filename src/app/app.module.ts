import {CommonModule} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthGuard} from './_guard/index';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './services';
import {httpInterceptor} from './shared/interceptor/interpectors';

export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
};


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [
    AuthGuard,
    httpInterceptor,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

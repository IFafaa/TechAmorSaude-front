import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './core/components/footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { SpinnerInterceptor } from './core/interceptors/spinner.interceptor';
import { CustomPaginationIntl } from './core/configs/custom.paginator.intl';
import { NgxMaskModule } from 'ngx-mask';
import { DefaultErrorModalComponent } from './shared/layout/default-error-modal/default-error-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FooterComponent,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    NgxSpinnerModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: MatPaginatorIntl,
      useValue: new CustomPaginationIntl().getCustomPaginationIntl(),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

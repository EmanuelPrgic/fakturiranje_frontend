import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PartneriComponent } from './partneri/partneri.component';
import { FaktureComponent } from './fakture/fakture.component';
import { PartnerDetailComponent } from './partner-detail/partner-detail.component';
import { SharedModule } from './_modules/shared.module';
import { TestErrorComponent } from './errors/test-error/test-error.component';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { UslugeComponent } from './usluge/usluge.component';
import { AddpartnerComponent } from './addpartner/addpartner.component';
import { PartnerEditComponent } from './partneri/partner-edit/partner-edit.component';
import { AdduslugeComponent } from './usluge/addusluge/addusluge.component';
import { UslugaEditComponent } from './usluge/usluga-edit/usluga-edit.component';
import { FakturaEditComponent } from './fakture/faktura-edit/faktura-edit.component';
import { FakturaAddComponent } from './fakture/faktura-add/faktura-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    PartneriComponent,
    FaktureComponent,
    PartnerDetailComponent,
    TestErrorComponent,
    NotFoundComponent,
    ServerErrorComponent,
    UslugeComponent,
    AddpartnerComponent,
    PartnerEditComponent,
    AdduslugeComponent,
    UslugaEditComponent,
    FakturaEditComponent,
    FakturaAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

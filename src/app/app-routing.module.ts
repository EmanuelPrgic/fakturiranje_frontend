import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PartneriComponent } from './partneri/partneri.component';
import { FaktureComponent } from './fakture/fakture.component';
import { PartnerDetailComponent } from './partner-detail/partner-detail.component';
import { AuthGuard } from './_guards/auth.guard';
import { TestErrorComponent } from './errors/test-error/test-error.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { UslugeComponent } from './usluge/usluge.component';
import { AddpartnerComponent } from './addpartner/addpartner.component';
import { PartnerEditComponent } from './partneri/partner-edit/partner-edit.component';
import { AdduslugeComponent } from './usluge/addusluge/addusluge.component';
import { UslugaEditComponent } from './usluge/usluga-edit/usluga-edit.component';
import { FakturaEditComponent } from './fakture/faktura-edit/faktura-edit.component';
import { FakturaAddComponent } from './fakture/faktura-add/faktura-add.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: '', runGuardsAndResolvers: 'always', canActivate: [AuthGuard],
    children: [
      {
        path: 'partneri', component: PartneriComponent
      },
      {
        path: 'addPartner', component: AddpartnerComponent
      },
      {
        path: 'partneri/:id', component: PartnerDetailComponent
      },
      {
        path: 'partner/edit', component: PartnerEditComponent
      },
      {
        path: 'fakture', component: FaktureComponent
      },
      {
        path: 'fakture/edit', component: FakturaEditComponent
      },
      {
        path: 'fakture/add', component: FakturaAddComponent
      },
      {
        path: 'usluge/edit', component: UslugaEditComponent
      },
      {
        path: 'usluge/add', component: AdduslugeComponent
      },
      {
        path: 'usluge', component: UslugeComponent
      }
    ]
  },
  {
    path: 'errors', component: TestErrorComponent
  },
  {
    path: 'not-found', component: NotFoundComponent
  },
  {
    path: 'server-error', component: ServerErrorComponent
  },
  {
    path: '**', component: NotFoundComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

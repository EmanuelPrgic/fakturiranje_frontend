import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PartneriComponent } from './partneri/partneri.component';
import { FaktureComponent } from './fakture/fakture.component';
import { AuthGuard } from './_guards/auth.guard';
import { TestErrorComponent } from './errors/test-error/test-error.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { UslugeComponent } from './usluge/usluge.component';
import { PartnerEditComponent } from './partneri/partner-edit/partner-edit.component';
import { AdduslugeComponent } from './usluge/addusluge/addusluge.component';
import { UslugaEditComponent } from './usluge/usluga-edit/usluga-edit.component';
import { FakturaEditComponent } from './fakture/faktura-edit/faktura-edit.component';
import { AddpartnerComponent } from './partneri/addpartner/addpartner.component';
import { AddfaktureComponent } from './fakture/addfakture/addfakture.component';
import { PreventUnsavedChangesGuard } from './_guards/prevent-unsaved-changes.guard';

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
        path: 'partneri/add', component: AddpartnerComponent
      },
      {
        path: 'partneri/edit/:id', component: PartnerEditComponent
      },
      {
        path: 'fakture', component: FaktureComponent
      },
      {
        path: 'fakture/edit/:id', component: FakturaEditComponent, canDeactivate: [PreventUnsavedChangesGuard]
      },
      {
        path: 'fakture/add', component: AddfaktureComponent
      },
      {
        path: 'usluge/edit/:id', component: UslugaEditComponent, canDeactivate: [PreventUnsavedChangesGuard]
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

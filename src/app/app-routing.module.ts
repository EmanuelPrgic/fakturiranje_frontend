import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PartneriComponent } from './partneri/partneri.component';
import { RacuniComponent } from './racuni/racuni.component';
import { PartnerDetailComponent } from './partner-detail/partner-detail.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: '', runGuardsAndResolvers: 'always', canActivate: [AuthGuard],
    children: [
      {
        path: 'partneri', component: PartneriComponent,
      },
      {
        path: 'partner/:id', component: PartnerDetailComponent
      },
      {
        path: 'racuni', component: RacuniComponent
      },
    ]
  },
  {
    path: '**', component: HomeComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicantsComponent } from './applicantByStore/components/applicants/applicants.component';
import { BewerberComponent } from './applicantByEntity/components/bewerber/bewerber.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicantsComponent,
  },
  {
    path: 'bewerber',
    component: BewerberComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

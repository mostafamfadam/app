import { PizzaReducer } from 'src/app/applicantByEntity/store/reducers/candidate.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';

import { StoreModule } from '@ngrx/store';
//import { reducer } from './applicantByStore/store/reducers/applicant.reducer';
import { ApplicantsComponent } from './applicantByStore/components/applicants/applicants.component';

import { reducers } from './applicantByEntity/store/reducers/index';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BewerberComponent } from './applicantByEntity/components/bewerber/bewerber.component';
import { NeuBewerberComponent } from './applicantByEntity/components/neu-bewerber/neu-bewerber.component';
import { NewApplicantComponent } from './applicantByStore/components/new-applicant/new-applicant.component';

const materialModules = {
  MatButtonModule,
};

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ApplicantsComponent,
    BewerberComponent,
    NeuBewerberComponent,
    NewApplicantComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),

    StoreModule.forFeature('pizza', PizzaReducer),
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

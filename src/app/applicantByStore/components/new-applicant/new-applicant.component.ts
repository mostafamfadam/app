import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from '../../store/actions/applicant.action';
import * as fromBewerber from '../../store/reducers/applicant.reducer';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { AppState } from 'src/app/app.state';
import { Applicant } from '../../store/models/applicant.model';
import * as ApplicantActions from '../../store/actions/applicant.action';

@Component({
  selector: 'app-new-applicant',
  templateUrl: './new-applicant.component.html',
  styleUrls: ['./new-applicant.component.scss'],
})
export class NewApplicantComponent implements OnInit {
  applicants: Observable<Applicant[]>;

  myForm = new FormGroup({
    name: new FormControl(''),
    vorname: new FormControl(''),
    alter: new FormControl(''),
    geschlecht: new FormControl(''),
    skills: new FormControl(''),
  });

  constructor(private store: Store<AppState>, private mDialog: MatDialog) {}

  ngOnInit(): void {}

  onSubmit() {
    this.store.dispatch(
      new ApplicantActions.AddApplicant({
        id: new Date().getUTCMilliseconds(),
        name: this.myForm.value.name,
        vorname: this.myForm.value.vorname,
        alter: this.myForm.value.alter,
        geschlecht: this.myForm.value.geschlecht,
        skills: this.myForm.value.skills,
      })
    );

    let diag = this.mDialog.closeAll();
  }

  async closeDialog() {
    await this.mDialog.closeAll();
  }
}

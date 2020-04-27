import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../app.state';
import { Applicant } from '../../store/models/applicant.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ApplicantActions from '../../store/actions/applicant.action';
import { MatDialog } from '@angular/material/dialog';
import { NewApplicantComponent } from '../new-applicant/new-applicant.component';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.scss'],
})
export class ApplicantsComponent implements OnInit {
  applicants: Observable<Applicant[]>;
  cust_id = 0;
  //

  constructor(private store: Store<AppState>, private mDialog: MatDialog) {}

  ngOnInit(): void {
    //

    //
    this.store.select('applicant').subscribe((result) => {
      //result.map((m) => this.result.push({ name: m.name }));
    });

    this.applicants = this.store.select('applicant');
    console.log('app: ', this.applicants);
  }

  delete(id) {
    this.store.dispatch(new ApplicantActions.RemoveApplicant(id));
  }
  //
  iSkills = [];
  showSkills(skills) {
    this.iSkills = skills.split(',');

    /*for (let key in skills) {
      this.iSkills = [{ key: key }, { skill: skills[key] }];
      console.log('key skills: ', skills[key]);
    }*/
  }
  dialog;
  openDialog() {
    let dialogRef = this.mDialog.open(NewApplicantComponent, {
      height: '600px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

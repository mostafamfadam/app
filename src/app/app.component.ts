import { AppState } from './app.state';
import { Applicant } from './applicantByStore/store/models/applicant.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ApplicantActions from './applicantByStore/store/actions/applicant.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'applicant-project';
  cust_id = 0;
  applicants: Observable<Applicant[]>;
  result = [];
  list = [];
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('applicant').subscribe((result) => {
      //result.map((m) => this.result.push({ name: m.name }));
    });

    this.applicants = this.store.select('applicant');

    console.log('this: ', this.result);
    //this.applicants = this.store.select('applicant');
  }

  add() {
    this.cust_id++;

    this.store.dispatch(
      new ApplicantActions.AddApplicant({
        id: this.cust_id,
        name: 'nme_X',
        vorname: 'vnme_V',
        alter: 22,
        geschlecht: 'male',
        skills: 'sk2,sk3,sk4,sk1',
      })
    );
  }

  delete(id) {
    this.store.dispatch(new ApplicantActions.RemoveApplicant(id)); //{ id: this.cust_id.toString() }))
  }
}

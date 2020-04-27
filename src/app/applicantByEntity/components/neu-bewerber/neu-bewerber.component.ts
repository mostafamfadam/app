import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from '../../store/actions/candidate.action';
import * as fromBewerber from '../../store/reducers/candidate.reducer';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-neu-bewerber',
  templateUrl: './neu-bewerber.component.html',
  styleUrls: ['./neu-bewerber.component.scss'],
})
export class NeuBewerberComponent implements OnInit {
  bewerbers: Observable<any>;

  myForm = new FormGroup({
    name: new FormControl(''),
    vorname: new FormControl(''),
    alter: new FormControl(''),
    geschlecht: new FormControl(''),
    skills: new FormControl(''),
  });

  constructor(
    private store: Store<fromBewerber.State>,
    private mDialog: MatDialog
  ) {}

  ngOnInit(): void {}

  name;
  onSubmit() {
    const pizza: fromBewerber.Bewerber = {
      id: new Date().getUTCMilliseconds().toString(),
      name: this.myForm.value.name,
      vorname: this.myForm.value.vorname,
      alter: this.myForm.value.alter,
      geschlecht: this.myForm.value.geschlecht,
      skills: this.myForm.value.skills,
    };
    console.log('name: ', name);
    this.store.dispatch(new actions.Create(pizza));

    let diag = this.mDialog.closeAll();
  }
  //
  async closeDialog() {
    await this.mDialog.closeAll();
  }
}

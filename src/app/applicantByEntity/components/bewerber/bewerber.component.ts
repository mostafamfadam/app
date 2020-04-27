import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from '../../store/actions/candidate.action';
import * as fromBewerber from '../../store/reducers/candidate.reducer';
import { MatDialog } from '@angular/material/dialog';
import { NeuBewerberComponent } from '../neu-bewerber/neu-bewerber.component';

@Component({
  selector: 'app-bewerber',
  templateUrl: './bewerber.component.html',
  styleUrls: ['./bewerber.component.scss'],
})
export class BewerberComponent implements OnInit {
  bewerbers: Observable<any>;

  constructor(
    private store: Store<fromBewerber.State>,
    private mDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.bewerbers = this.store.select(fromBewerber.selectAll);
    this.create('init0');
    this.create('init1');
    this.create('init2');
  }
  //
  name;
  create(name) {
    const pizza: fromBewerber.Bewerber = {
      id: new Date().getUTCMilliseconds().toString(),
      name: name,
      vorname: 'vor',
      alter: 22,
      geschlecht: 'male',
      skills: 'dd,dadd,fafaf,dadolf,fleujd',
    };
    console.log('name: ', name);
    this.store.dispatch(new actions.Create(pizza));
  }

  updatePizza(id, name) {
    this.store.dispatch(new actions.Update(id, { name: name }));
  }
  deletePizza(id) {
    this.store.dispatch(new actions.Delete(id));
  }

  dialog;
  openDialog() {
    this.dialog = this.mDialog.open(NeuBewerberComponent, {
      height: '600px',
      width: '600px',
    });
  }

  iSkills = [];

  showSkills(skills) {
    /* this.dialog = this.mDialog.open(DialogComponent, {
      width: '250px',
      data: { iSkills: skills },
    });*/

    /*for (let key in skills) {
      this.iSkills.push({ key: key, skill: skills[key] });
      console.log('key skills: ', skills[key]);
    }*/

    this.iSkills = skills.split(',');
  }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuBewerberComponent } from './neu-bewerber.component';

describe('NeuBewerberComponent', () => {
  let component: NeuBewerberComponent;
  let fixture: ComponentFixture<NeuBewerberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeuBewerberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuBewerberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaryIdComponent } from './military-id.component';

describe('MilitaryIdComponent', () => {
  let component: MilitaryIdComponent;
  let fixture: ComponentFixture<MilitaryIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilitaryIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilitaryIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

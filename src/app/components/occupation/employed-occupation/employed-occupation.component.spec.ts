import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployedOccupationComponent } from './employed-occupation.component';

describe('EmployedOccupationComponent', () => {
  let component: EmployedOccupationComponent;
  let fixture: ComponentFixture<EmployedOccupationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployedOccupationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployedOccupationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

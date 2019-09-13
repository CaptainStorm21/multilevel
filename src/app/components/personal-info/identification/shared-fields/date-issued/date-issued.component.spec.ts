import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateIssuedComponent } from './date-issued.component';

describe('DateIssuedComponent', () => {
  let component: DateIssuedComponent;
  let fixture: ComponentFixture<DateIssuedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateIssuedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateIssuedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

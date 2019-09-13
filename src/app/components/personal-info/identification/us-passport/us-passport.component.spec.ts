import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsPassportComponent } from './us-passport.component';

describe('UsPassportComponent', () => {
  let component: UsPassportComponent;
  let fixture: ComponentFixture<UsPassportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsPassportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

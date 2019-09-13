import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateExpirationComponent } from './date-expiration.component';

describe('DateExpirationComponent', () => {
  let component: DateExpirationComponent;
  let fixture: ComponentFixture<DateExpirationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateExpirationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateExpirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

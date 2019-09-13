import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetiredOccupationComponent } from './retired-occupation.component';

describe('RetiredOccupationComponent', () => {
  let component: RetiredOccupationComponent;
  let fixture: ComponentFixture<RetiredOccupationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetiredOccupationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetiredOccupationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveMilitaryOccupationComponent } from './active-military-occupation.component';

describe('ActiveMilitaryOccupationComponent', () => {
  let component: ActiveMilitaryOccupationComponent;
  let fixture: ComponentFixture<ActiveMilitaryOccupationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveMilitaryOccupationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveMilitaryOccupationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

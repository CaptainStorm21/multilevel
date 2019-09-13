import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnemployedOccupationComponent } from './unemployed-occupation.component';

describe('UnemployedOccupationComponent', () => {
  let component: UnemployedOccupationComponent;
  let fixture: ComponentFixture<UnemployedOccupationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnemployedOccupationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnemployedOccupationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

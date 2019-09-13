import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfEmployedOccupationComponent } from './self-employed-occupation.component';

describe('SelfEmployedOccupationComponent', () => {
  let component: SelfEmployedOccupationComponent;
  let fixture: ComponentFixture<SelfEmployedOccupationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfEmployedOccupationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfEmployedOccupationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

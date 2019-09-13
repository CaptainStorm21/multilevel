import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateIdComponent } from './state-id.component';

describe('StateIdComponent', () => {
  let component: StateIdComponent;
  let fixture: ComponentFixture<StateIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

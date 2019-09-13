import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOccupationComponent } from './student-occupation.component';

describe('StudentOccupationComponent', () => {
  let component: StudentOccupationComponent;
  let fixture: ComponentFixture<StudentOccupationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentOccupationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentOccupationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

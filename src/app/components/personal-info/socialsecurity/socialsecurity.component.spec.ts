import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsecurityComponent } from './socialsecurity.component';

describe('SocialsecurityComponent', () => {
  let component: SocialsecurityComponent;
  let fixture: ComponentFixture<SocialsecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialsecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialsecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

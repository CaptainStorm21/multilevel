import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-step1',
  templateUrl: './registration-step1.component.html',
  styleUrls: ['./registration-step1.component.css']
})
export class RegistrationStep1Component implements OnInit {

  constructor() { }

  @Input() regForm: FormGroup;

  ngOnInit() {
  }

  step1Submitted() {
    this.regForm.get('personalDetails').get('firstname').markAsTouched();
    this.regForm.get('personalDetails').get('firstname').updateValueAndValidity();

    this.regForm.get('personalDetails').get('lastname').markAsTouched();
    this.regForm.get('personalDetails').get('lastname').updateValueAndValidity();

    this.regForm.get('personalDetails').get('middlename').markAsTouched();
    this.regForm.get('personalDetails').get('middlename').updateValueAndValidity();

    this.regForm.get('personalDetails').get('suffix').markAsTouched();
    this.regForm.get('personalDetails').get('suffix').updateValueAndValidity();

    this.regForm.get('personalDetails').get('mothermaidenname').markAsTouched();
    this.regForm.get('personalDetails').get('mothermaidenname').updateValueAndValidity();

    this.regForm.get('personalDetails').get('dateofbirth').markAsTouched();
    this.regForm.get('personalDetails').get('dateofbirth').updateValueAndValidity();

    this.regForm.get('personalDetails').get('socialsecurity').markAsTouched();
    this.regForm.get('personalDetails').get('socialsecurity').updateValueAndValidity();

    this.regForm.get('personalDetails').get('birthdate').markAsTouched();
    this.regForm.get('personalDetails').get('birthdate').updateValueAndValidity();

    this.regForm.get('personalDetails').get('email').markAsTouched();
    this.regForm.get('personalDetails').get('email').updateValueAndValidity();
  }

}

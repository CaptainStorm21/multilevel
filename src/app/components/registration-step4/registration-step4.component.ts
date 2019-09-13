import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-registration-step4',
  templateUrl: './registration-step4.component.html',
  styleUrls: ['./registration-step4.component.css']
})
export class RegistrationStep4Component implements OnInit {

  constructor() { }

  @Input() regForm: FormGroup;
  formSubmitted: boolean = false;

  ngOnInit() {
  }

  submit() {
    console.log('submitted');
    console.log(this.regForm.value);
    this.formSubmitted = true;

  }

}

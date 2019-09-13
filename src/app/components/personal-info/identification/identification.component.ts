import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.scss']
})
export class IdentificationComponent implements OnInit {
	@Input()
	parent: FormGroup;

    id_components = [
        { id: 1, value: 'driversLicense', viewValue: 'Drivers\'s License' },
        { id: 2, value: 'militaryID', viewValue: 'Military ID' },
        { id: 3, value: 'usPassport', viewValue: 'U.S Passport'},
        { id: 4, value: 'stateID', viewValue: 'State ID' }
    ];

    id_type = [];


  constructor() { }

  ngOnInit() {
  }

}

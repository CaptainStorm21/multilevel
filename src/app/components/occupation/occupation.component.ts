import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-occupation',
  templateUrl: './occupation.component.html',
  styleUrls: ['./occupation.component.scss']
})
export class OccupationComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

    select;
    occupations = [
        { id: 1, value: 'Student', viewValue: 'Student' },
        { id: 2, value: 'Employed', viewValue: 'Employed' },
        { id: 3, value: 'Self-Employed', viewValue: 'Self-Employed' },
        { id: 4, value: 'Acive Military', viewValue: 'Acive Military' },
        { id: 5, value: 'Unemployed', viewValue: 'Unemployed' },
        { id: 6, value: 'Retired', viewValue: 'Retired' }
    ];

    //for ngModel
    occup = [];


}

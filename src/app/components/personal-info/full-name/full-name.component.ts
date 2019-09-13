import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface Suffix {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-full-name',
  templateUrl: './full-name.component.html',
  styleUrls: ['./full-name.component.css']
})
export class FullNameComponent implements OnInit {

  constructor() { }

  @Input() regForm: FormGroup;

  ngOnInit() {
  }

  suffixes = [
 
    {
        "viewValue": "Jr.",
        "value": "Jr"
    },
    {
        "viewValue": "Sr.",
        "value": "Sr"
    },
    {
        "viewValue": "II",
        "value": "II"
    },
{
    "viewValue": "III",
    "value": "III"
},
    {
        "viewValue": "IV",
        "value": "IV"
    },
{
    "viewValue": "V",
    "value": "V"
},
{
    "viewValue": "VI",
    "value": "VI"
},
{
    "viewValue": "VII",
    "value": "VII"
},
{
    "viewValue": "VIII",
    "value": "VIII"
}

];




}

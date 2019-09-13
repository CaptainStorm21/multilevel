import { Component, OnInit, Output } from '@angular/core';

export interface Residence {
    value: string;
    viewValue: string;
}


    @Component({
      selector: 'app-residency-status',
        templateUrl: './residency-status.component.html',
        styleUrls: ['./residency-status.component.scss']
    })
    export class ResidencyStatusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 

    residency_status: Residence[] = [
 
            {
                "viewValue": "Own Free and Clear",
                "value": "1"
            },
            {
                "viewValue": "Rent",
                "value": "2"
            },
            {
                "viewValue": "Buying/Own with Mortgage",
                "value": "3"
            },
            {
                "viewValue": "Live with Parents",
                "value": "4"
            },
            {
                "viewValue": "Government Quarters",
                "value": "5"
            }
    ];

}

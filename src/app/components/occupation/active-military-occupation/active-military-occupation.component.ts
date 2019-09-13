import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-military-occupation',
  templateUrl: './active-military-occupation.component.html',
  styleUrls: ['./active-military-occupation.component.scss']
})
export class ActiveMilitaryOccupationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    military_branches  = [
        { id: '1', value: 'airForce', viewValue: 'Air Force' },
        { id: '2',value: 'army', viewValue: 'Army' },
        { id: '3',value: 'coastGuard', viewValue: 'Coast Guard' },
        { id: '4', value: 'marineCorps', viewValue: 'Marine Corps' },
        { id: '5',value: 'navy', viewValue: 'Navy' },
    ];

    minDate = new Date(2000, 0, 1);
    maxDate = new Date(2020, 0, 1);
}
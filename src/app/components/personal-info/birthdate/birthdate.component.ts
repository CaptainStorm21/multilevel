import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-birthdate',
  templateUrl: './birthdate.component.html',
  styleUrls: ['./birthdate.component.scss']
})
export class BirthdateComponent implements OnInit {
    maxDate;

  constructor() { }

  ngOnInit() {
      this.maxDate = new Date();
      this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }
  @Input() regForm: FormGroup;
}

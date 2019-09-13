import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mother-maiden-name',
  templateUrl: './mother-maiden-name.component.html',
  styleUrls: ['./mother-maiden-name.component.css']
})
export class MotherMaidenNameComponent implements OnInit {

  constructor() { }

  @Input() regForm: FormGroup;

  ngOnInit() {
  }
}

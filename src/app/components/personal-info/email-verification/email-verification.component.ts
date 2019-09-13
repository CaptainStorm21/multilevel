import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailComponent implements OnInit {

  constructor() { }

  @Input() regForm: FormGroup;

  ngOnInit() {
  }
}

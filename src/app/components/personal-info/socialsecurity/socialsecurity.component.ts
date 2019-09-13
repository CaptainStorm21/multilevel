import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-socialsecurity',
  templateUrl: './socialsecurity.component.html',
  styleUrls: ['./socialsecurity.component.scss']
})
export class SocialsecurityComponent implements OnInit {

  constructor() { }

  @Input() regForm: FormGroup;

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  registrationForm: FormGroup;

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      'personalDetails': new FormGroup({
        'firstname': new FormControl(null, Validators.required),
        'middlename': new FormControl(null),
        'suffix': new FormControl(null),
        'lastname': new FormControl(null, Validators.required),
        'mothermaidenname': new FormControl(null, Validators.required),
        'socialsecurity': new FormControl(null, Validators.required),
        'birthdate': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'primaryphone': new FormControl(null, Validators.required),
        'altphone': new FormControl(null, Validators.required),
      }),
      'contactDetails': new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'phone': new FormControl(null)
      })
    });

  }

}

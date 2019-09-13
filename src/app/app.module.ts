import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatStepperModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,

} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material';

import { AppComponent } from './app.component';
import { RegistrationStep1Component } from './components/registration-step1/registration-step1.component';
import { RegistrationStep2Component } from './components/registration-step2/registration-step2.component';
import { RegistrationStep3Component } from './components/registration-step3/registration-step3.component';
import { RegistrationStep4Component } from './components/registration-step4/registration-step4.component';
import { RegistrationStep5Component } from './components/registration-step5/registration-step5.component';

import { FullNameComponent } from './components/personal-info/full-name/full-name.component';
import { MotherMaidenNameComponent }  from './components/personal-info/mother-maiden-name/mother-maiden-name.component';
import { SocialsecurityComponent } from './components/personal-info/socialsecurity/socialsecurity.component';
import { BirthdateComponent } from './components/personal-info/birthdate/birthdate.component';
import { EmailComponent } from './components/personal-info/email-verification/email-verification.component';
import { IdentificationComponent } from './components/personal-info/identification/identification.component';

//id card
import { DriverLicenseComponent } from './components/personal-info/identification/driver-license/driver-license.component';
import { ChildIdComponent   } from './components/personal-info/identification/id-child/id-child.component';
import { MilitaryIdComponent  } from './components/personal-info/identification/military-id/military-id.component';
import { UsPassportComponent } from './components/personal-info/identification/us-passport/us-passport.component';
import { StateIdComponent } from './components/personal-info/identification/state-id/state-id.component';

//shared id fields
import { DateExpirationComponent } from './components/personal-info/identification/shared-fields/date-expiration/date-expiration.component';
import { DateIssuedComponent  } from './components/personal-info/identification/shared-fields/date-issued/date-issued.component';
import { IdNumberComponent } from './components/personal-info/identification/shared-fields/id-number/id-number.component';

//states
import { UsStatesComponent } from './components/shared/us-states/us-states.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationStep1Component,
    RegistrationStep2Component,
    RegistrationStep3Component,
    RegistrationStep4Component,
    RegistrationStep5Component,

//components
    FullNameComponent,
    MotherMaidenNameComponent,
    SocialsecurityComponent,
    BirthdateComponent,
    EmailComponent,
    IdentificationComponent,
    DriverLicenseComponent,
    ChildIdComponent,
    MilitaryIdComponent,
    UsPassportComponent,
    StateIdComponent,
    UsStatesComponent,
    //shared
    DateExpirationComponent,
    DateIssuedComponent,
    IdNumberComponent,
    UsStatesComponent,

  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, MatExpansionModule,
    BrowserAnimationsModule,     MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule, MatButtonModule, MatSidenavModule,
    MatIconModule, MatListModule, MatStepperModule, MatSelectModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

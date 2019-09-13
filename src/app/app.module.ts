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
  MatCheckboxModule,
  MatRadioModule

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
import { DisclosureComponent  } from './components/personal-info/disclosure/disclosure.component';
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
import { UsStatesComponent } from './components/personal-info/us-states/us-states.component';
import { PhoneComponent } from './components/personal-info/phone/phone.component';

//occupation
import { OccupationComponent } from './components/occupation/occupation.component';
import { ActiveMilitaryOccupationComponent } from './components/occupation/active-military-occupation/active-military-occupation.component';
import { EmployedOccupationComponent } from './components/occupation/employed-occupation/employed-occupation.component';
import { RetiredOccupationComponent } from './components/occupation/retired-occupation/retired-occupation.component';
import { SelfEmployedOccupationComponent } from './components/occupation/self-employed-occupation/self-employed-occupation.component';
import { StudentOccupationComponent } from './components/occupation/student-occupation/student-occupation.component';
import { UnemployedOccupationComponent } from './components/occupation/unemployed-occupation/unemployed-occupation.component';

//RESIDENCE
import { ResidenceComponent } from './components/residence/residence.component';
import { ResidencyStatusComponent  } from './components/residence/residency-status/residency-status.component';

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
    DisclosureComponent,
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
    PhoneComponent,
    //occupation
    OccupationComponent,
    ActiveMilitaryOccupationComponent,
    EmployedOccupationComponent,
    RetiredOccupationComponent,
    SelfEmployedOccupationComponent,
    StudentOccupationComponent,
    UnemployedOccupationComponent,
    //residence
    ResidenceComponent,
    ResidencyStatusComponent,
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, MatExpansionModule,
    BrowserAnimationsModule,     MatDatepickerModule,
    MatNativeDateModule, MatCheckboxModule, MatRadioModule,
    MatToolbarModule, MatButtonModule, MatSidenavModule,
    MatIconModule, MatListModule, MatStepperModule, MatSelectModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpecialEventPopupComponent } from './components/special-event-popup/special-event-popup.component';

// PAGES
import { IndexComponent } from './pages/index/index.component';
import { ServicesComponent } from './pages/services/services.component';
import { NewPatientComponent } from './pages/new-patient/new-patient.component';
import { MeetTheStaffComponent } from './pages/meet-the-staff/meet-the-staff.component';
import { EducationComponent } from './pages/education/education.component';
import { OfficeTourComponent } from './pages/office-tour/office-tour.component';


// ROUTES
const appRoutes:Routes = [
  {path:'', component:IndexComponent},
  {path:'services', component:ServicesComponent},
  {path:'new-patient', component:NewPatientComponent},
  {path:'meet-the-staff', component:MeetTheStaffComponent},
  {path:'education', component:EducationComponent},
  {path:'office-tour', component:OfficeTourComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ServicesComponent,
    NewPatientComponent,
    MeetTheStaffComponent,
    EducationComponent,
    OfficeTourComponent,
    HeaderComponent,
    FooterComponent,
    SpecialEventPopupComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

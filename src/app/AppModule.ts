import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { BookingComponent } from './booking/booking.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule  } from '@angular/common/http';
import { ConsultantResultComponent } from './consultant-result/consultant-result.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorCardComponent } from './doctor-card/doctor-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { DoctorpatientsappointmentsComponent } from './doctorpatientsappointments/doctorpatientsappointments.component';
import { GettokenInterceptor } from './interseptors/gettoken.interceptor';
import { PatianteComponent } from './patiante/patiante.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BookingComponent,
    ConsultantResultComponent,
    DoctorDetailsComponent,
    DoctorCardComponent,
    DoctorProfileComponent,
    ConsultantResultComponent,
    DoctorpatientsappointmentsComponent,
    PatianteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SlickCarouselModule

    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:GettokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}

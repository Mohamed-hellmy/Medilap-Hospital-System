import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BookingComponent } from './booking/booking.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import {authoraizationGuard} from './gards/authoraization.guard'
import { PatianteComponent } from './patiante/patiante.component';
import { ConsultantResultComponent } from './consultant-result/consultant-result.component';


const routes: Routes = [
  {path:"" ,component:HomeComponent},
  {path:"booking" ,canActivate:[authoraizationGuard] ,component:BookingComponent},
  {path:"doctor",canActivate:[authoraizationGuard] ,component:DoctorProfileComponent},
  {path:"patiant",canActivate:[authoraizationGuard] ,component:PatianteComponent},
  {path:"consultant",component:ConsultantResultComponent},
  {path:"auth",loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path:"**",component:NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

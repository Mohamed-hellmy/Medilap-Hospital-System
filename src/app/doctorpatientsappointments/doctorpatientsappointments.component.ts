import { Component, Input } from '@angular/core';
import { Doctor, DoctorBookDto } from '../interfases/interfaces';
import { DoctorshareService } from '../services/doctorshare.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-doctorpatientsappointments',
  templateUrl: './doctorpatientsappointments.component.html',
  styleUrls: ['./doctorpatientsappointments.component.css']
})
export class DoctorpatientsappointmentsComponent {
  @Input() tabledata?: DoctorBookDto[];
  @Input() doctorInfo?:Doctor;



constructor(private doctortoConsultant:DoctorshareService,private nav :Router ) {
}


  convertTimeFormat(inputTime: string): string | null {
    const [hours, minutes] = inputTime.split(":").slice(0, 2);
    const convertedHours = (+hours % 12) || 12;
    const period = +hours < 12 ? "AM" : "PM";
    return `${convertedHours}:${minutes} ${period}`;
    
  }


  writePrescription(id:string,book:string):void
  {
    this.doctortoConsultant.setData({
      doctorID:this.doctorInfo?.id??"",
      doctorname:this.doctorInfo?.name ??"",
      patientId:id,
      bookId:book

    })
    this.nav.navigateByUrl('/consultant')
    
    
    
         
  }
}

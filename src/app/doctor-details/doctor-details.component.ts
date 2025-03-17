import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Doctor, DoctorBookDto } from '../interfases/interfaces';
import { DoctorService } from '../services/doctor.service';
import { DoctorshareService } from '../services/doctorshare.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {

  id:string = '';
  doctorInfo?:Doctor;
  doctorBook?: DoctorBookDto[]

  constructor(private nav :Router,private rout: ActivatedRoute,private docserve: DoctorService,private doctortoConsultant:DoctorshareService) {
  }
  ngOnInit(): void {
    this.rout.params.subscribe((map) => {
      this.id = map['id'];
    })

    this.docserve.getDoctorById(this.id).subscribe({
      next:(data)=>
      {
      this.doctorInfo=data;
      console.log(data);
      
     
      
      }
    });

    this.docserve.getDoctorBooKingInDay(this.id).subscribe({
      next:(data)=>{

        this.doctorBook=data
        console.log(data);
        
        
      }
    })


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
      doctorID:this.id,
      doctorname:this.doctorInfo?.name ??"",
      patientId:this.id,
      bookId:book

    })
    this.nav.navigateByUrl('/consultant')
    
    
    
         
  }

}

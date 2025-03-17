
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { DoctorService } from '../services/doctor.service';
import { DoctorshareService } from '../services/doctorshare.service';
import { Doctor, DoctorBookDto } from '../interfases/interfaces';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent {
  id: string = "";
  doctorInfo?:Doctor;
  doctorBook?: DoctorBookDto[]

  doctorID:string=localStorage.getItem("id")!
  constructor(private rout: ActivatedRoute,private docserve: DoctorService) {
  }
  ngOnInit(): void {
  
    this.docserve.getDoctorById(this.doctorID).subscribe({
      next:(data)=>
      {
        
      this.doctorInfo=data;
      console.log(data);
      
     
      
      }
    });

    this.docserve.getDoctorBooKingInDay(this.doctorID).subscribe({
      next:(data)=>{

        this.doctorBook=data
        console.log(data);
        

      }
    })


  }
  
}

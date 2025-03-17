import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Patient } from '../interfases/interfaces';

@Component({
  selector: 'app-patiante',
  templateUrl: './patiante.component.html',
  styleUrls: ['./patiante.component.css']
})
export class PatianteComponent implements OnInit{

  patient?:Patient

patiantID:string=localStorage.getItem("id")!
  constructor(private patientInfo:PatientService) {
   
    
  }
  ngOnInit(): void {
    this.patientInfo.getpatientByID(this.patiantID).subscribe({
      next:(data)=>{
        this.patient=data;
        console.log(data);
        

      }
    })
  }
}

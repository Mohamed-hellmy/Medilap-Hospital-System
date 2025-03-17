import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Disease, Patient, doctorToConsultant } from '../interfases/interfaces';
import { PatientService } from '../services/patient.service';
import { DoctorshareService } from '../services/doctorshare.service';
import { DoctorService } from '../services/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultant-result',
  templateUrl: './consultant-result.component.html',
  styleUrls: ['./consultant-result.component.css']
})
export class ConsultantResultComponent {

  data?:doctorToConsultant;
  patientdata?:Patient;
  constructor(private doctortoConsultant:DoctorshareService ,private patientServe:PatientService,private doctorservice:DoctorService,private router:Router) {
  }
    ngOnInit(): void {
      this.data=this.doctortoConsultant.getData();
     if(this.data)
     {
      this.patientServe.getpatientByID(this.data.patientId).subscribe({
        next:(data)=>{this.patientdata=data ,console.log(data);
         },
      })
     }
  }

public form =new FormGroup({
  diseaseName:new FormControl<string>("",[
    Validators.required,
    Validators.minLength(3)
  ]),
  diseaseDetails:new FormControl<string>("",[
    Validators.required,
    Validators.minLength(3)
  ]),
  diseasetreatment:new FormControl<string>("",[
    Validators.required,
    Validators.minLength(3)
  ]),
})
sumit()
{
  console.log("fsdjfkfsk");
  
  if(this.form.valid && this.data!=null && this.patientdata!=null)
  {
    const Disease:Disease={
      diseaseName: this.form.value.diseaseName!,
      diseaseDetails: this.form.value.diseaseDetails!,
      diseasetreatment: this.form.value.diseasetreatment!,
      patientid: this.patientdata.id,
      patientName: this.patientdata.name,
      doctorId: this.data.doctorID,
      doctorName: this.data.doctorname
    }
    this.doctorservice.UpdateBookingStatus(this.data.bookId).subscribe({
     
      next:(data)=>{
        console.log(data);
        console.log(this.data?.bookId);
        this.patientServe.setPrescription(Disease).subscribe({
          next:()=>{
            console.log("good");
            this.router.navigateByUrl(`/doctor`)
            
          },
          error:()=>{
            console.log("Bad");
            
          }
        })
      }

    })
        
  

  }
  else{
    return
  }
}
}

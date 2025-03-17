import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Disease, Patient } from '../interfases/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private client:HttpClient) { }


  getpatientByID(id:string):Observable<Patient>
  {
    
    return this.client.get<Patient>(`https://localhost:7095/api/Patient/patientdetails/${id}`)

  }
  setPrescription(Disease:Disease):Observable<object>
  {
    return this.client.post("https://localhost:7095/api/Patient",Disease)
  }
  
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Doctor, DoctorBookDto } from '../interfases/interfaces';



@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private client:HttpClient) { 


  }
  getDoctor():Observable<Doctor[]>
  {
    return this.client.get<Doctor[]>("https://localhost:7095/api/Doctor")
  }
  getDoctorById(id:string):Observable<Doctor>
  {
    return this.client.get<Doctor>(`https://localhost:7095/api/Doctor/doctordetails/${id}`)
  }
  getDoctorBooKingInDay(id:string)
  {
    return this.client.get<DoctorBookDto[]>(`https://localhost:7095/api/Doctor/doctorbookinday/${id}`)
  }

  UpdateBookingStatus(id:string):Observable<{}>
  {
    console.log(id);
    
    return this.client.get(`https://localhost:7095/api/Booking/finishbook/${id}`)
  }
 
 
}

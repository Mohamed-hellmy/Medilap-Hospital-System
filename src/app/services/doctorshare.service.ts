import { Injectable } from '@angular/core';
import { doctorToConsultant } from '../interfases/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DoctorshareService {
  private data?:doctorToConsultant

  constructor() { }

  setData(data: doctorToConsultant) {
    
    
    this.data = data; 
    console.log(this.data);
    
  }

  getData() {
    return this.data;
  }
}

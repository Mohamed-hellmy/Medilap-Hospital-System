import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hosptial } from '../interfases/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private clint:HttpClient ) { }



gethospitals() :Observable<Hosptial[]>{

  return  this.clint.get<Hosptial[]>("https://localhost:7095/api/Hospital")
}
}

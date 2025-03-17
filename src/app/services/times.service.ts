import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { doctorschedulesDto } from '../interfases/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimesService {

  constructor(private clint:HttpClient) { }

  getDocTime(id:string) :Observable<doctorschedulesDto[]>{
    return this.clint.get<doctorschedulesDto[]>(`https://localhost:7095/api/Booking/${id}`)
  }
}

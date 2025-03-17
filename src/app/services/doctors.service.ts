import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from '../interfases/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private clint:HttpClient) {}

 public getdoctors():Observable<Doctor[]> {
  return  this.clint.get<Doctor[]>('https://localhost:7095/api/Doctor')
  }
}

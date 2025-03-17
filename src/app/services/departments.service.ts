import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../interfases/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private clint:HttpClient) { }

  getDepartments() :Observable<Department[]>{

    return this.clint.get<Department[]>("https://localhost:7095/api/Department")
  }
}

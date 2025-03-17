import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Patient, tokenDecode } from '../interfases/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GetIdFromtokenService {

  constructor( private clint:HttpClient) { }

//   public userdata$= new BehaviorSubject<Patient>({
//     id: "jkhjkk";
//     name: string;
//     phonenumber: number;
//     email: string;
//     birthDate: string;
//     address: string;
//     diseases: {
//         diseaseName: string,
//         diseaseDetails: string,
//         diseasetreatment: string,
//         doctorName: string,

//     }[]
// })

  public getidToken() :Observable<tokenDecode>{
    return this.clint.get<tokenDecode>("https://localhost:7095/api/VerifyToken/verify")
  
  }
}

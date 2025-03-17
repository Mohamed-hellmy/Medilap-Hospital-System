import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { paitentRegster, tokenDto } from '../interfases/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private client: HttpClient) { }

  public sendUserData(data:paitentRegster) : Observable<tokenDto> {

    return this.client.post<tokenDto>("https://localhost:7095/api/RegisterPatient/CleanRegister",data)
  }

}

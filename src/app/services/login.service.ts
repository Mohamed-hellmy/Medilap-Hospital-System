import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginDto, tokenDto } from '../interfases/interfaces';
import { Observable , tap ,BehaviorSubject} from 'rxjs';
import { GetIdFromtokenService } from './get-id-fromtoken.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private clint:HttpClient ,private getidtoken:GetIdFromtokenService) { }

  public islogin$= new BehaviorSubject<boolean>(false)

 public login(data:loginDto) :Observable<tokenDto> {
    return this.clint.post<tokenDto>('https://localhost:7095/api/RegisterPatient/CleanLogin',data)
    .pipe(tap( response =>{
       
      this.islogin$.next(true)
      localStorage.setItem("token",response.token)
      
      this.getidtoken.getidToken().subscribe({
        next: (response) => {
          
          localStorage.setItem("id",response.idOfCurrentUser)
        }
      })
    }))
    
  }
}

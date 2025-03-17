import { Injectable } from '@angular/core';
import { Observable , tap ,BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorOrpatinteService {

  constructor() { }

  public isdoctor$=new BehaviorSubject<boolean>(false)
}

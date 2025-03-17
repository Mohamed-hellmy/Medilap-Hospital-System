import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { BookingDto } from '../interfases/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  constructor(private client: HttpClient) { }

  public getappointments(): Observable<BookingDto[]> {
    return this.client.get<BookingDto[]>(
      ''
    );
  }

  public sendBooking(data:BookingDto) : Observable<{}>{
    return this.client.post("https://localhost:7095/api/Booking",data)
  }
}

import { Component, EventEmitter, Input, OnInit, Output, OnChanges, OnDestroy } from '@angular/core';
import {
  faSearch, faHospital, faArrowDown, faStethoscope,
  faUserDoctor, faStar, faStarHalf, faLocationPin,
  faMoneyBill1Wave, faClock, faPhone
} from '@fortawesome/free-solid-svg-icons';
import { BookingDto, Doctor, Patient, doctorschedulesDto, tokenDecode } from '../interfases/interfaces';
import { TimesService } from '../services/times.service';
import { DatePipe } from '@angular/common';
import { GetIdFromtokenService } from '../services/get-id-fromtoken.service';
import { PatientService } from '../services/patient.service';
import { AppointmentService } from '../services/appointment.service';


@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.css']
})
export class DoctorCardComponent implements OnInit {

  constructor(

    private getdoctime: TimesService,
    private getidtoken: GetIdFromtokenService, private getPatint: PatientService,
    private booking: AppointmentService) { }

  fahosbital = faHospital;
  arrowd = faArrowDown
  Stethoscope = faStethoscope
  doctor = faUserDoctor
  search = faSearch
  star = faStar
  hstar = faStarHalf
  location = faLocationPin
  money = faMoneyBill1Wave
  clock = faClock
  phone = faPhone

  notAvilable: string = "text-decoration-line-through"

  bookingTime: string = ""
  day: string = ""

  timeSelcted: string = "bg-primary"

  doctorTime?: doctorschedulesDto[];
  toost: boolean = true
  patinteID?: string;
  patintData?: Patient;



  @Input() docData?: Doctor;

  @Output() dataSucsess = new EventEmitter<boolean>();

  ngOnInit(): void {

    this.getdoctime.getDocTime(this.docData!.id).subscribe({
      next: (data) => {
        this.doctorTime = data
        this.dataSucsess.emit(true)
        console.log(this.doctorTime);
        console.log(this.docData?.id);

      }
    })


    this.getidtoken.getidToken().subscribe({
      next: (response) => {

        this.patinteID = response.idOfCurrentUser
        console.log(this.patinteID);

        this.getPatint.getpatientByID(this.patinteID).subscribe({
          next: (data) => {
            console.log(data);

            this.patintData = data
          }
        })
      }
    })

  }


  selectBookTime(day: string, e: Event) {
    this.bookingTime = (e.target as HTMLButtonElement).value;
    this.day = day




  }



  printdate() {

    window.confirm("are you sure to confirm this appointment")


    const mydata = new Date()
    const year = mydata.getFullYear()
    const hours = mydata.getHours();
    const minutes = mydata.getMinutes();
    const seconds = mydata.getSeconds();
    let formattedTime = `${hours}:${minutes}:${seconds}`;
    if (minutes < 10) {
      formattedTime = `0${formattedTime}`;
    }

    if (seconds < 10) {
      formattedTime = `${formattedTime}0`;
    }


      let book:BookingDto={
        dateOfBook:`${year+"-"+ this.day.split(" ")[1].split("-").reverse().join("-")}` ,
        timeOfBook: `${this.bookingTime}`,
        patSubmitDate:"2023-11-24",
        patSubmitTime: `${formattedTime}`,
        patName: this.patintData?.name,
        email: this.patintData?.email,
        number: this.patintData?.phonenumber,
        patId: this.patinteID,
        status:true,
        doctorId: this.docData?.id
    }

    // let book: BookingDto = {
    //   dateOfBook: "2023-11-26",
    //   timeOfBook: "09:00:00",
    //   patSubmitDate: "2023-11-24",
    //   patSubmitTime: "12:00:00",
    //   patName: "mustafa selim",
    //   email: "mustafa@yahoo.com",
    //   number: 125897643,
    //   patId: "62152a91-3baa-4abf-a477-ac86d8e25a24",
    //   doctorId: "0e2a556d-c7ee-4176-ad30-7370e886b725"
    // }

    console.log(book);

    this.booking.sendBooking(book).subscribe({
      next: (response) => {
        this.toost = true
        console.log(response);
       
        window.alert("Done your appointment has been success")
      }
    })

  }


}


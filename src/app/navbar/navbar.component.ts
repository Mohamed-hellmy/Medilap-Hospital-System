import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { HospitalService } from '../services/hospital.service';
import { Router } from '@angular/router';
import { DoctorOrpatinteService } from '../services/doctor-orpatinte.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  islogin:boolean=false
  isdoctor:boolean=false

  constructor( private check:LoginService ,private router:Router , private toogle:DoctorOrpatinteService){}
  ngOnInit(): void {
    this.check.islogin$.subscribe((data)=>{
       this.islogin=data
    })

    this.toogle.isdoctor$.subscribe((data)=>{
      
      this.isdoctor=data
    })

  }

  logout(){
    localStorage.clear()
    this.check.islogin$.next(false)
    this.router.navigateByUrl("/")
  }
}


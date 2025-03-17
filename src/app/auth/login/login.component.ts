import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginDto } from 'src/app/interfases/interfaces';
import { DoctorOrpatinteService } from 'src/app/services/doctor-orpatinte.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  ispatint:boolean=true;
  isdoctor:boolean=false;

  changcolor:string="bg-danger"
  
constructor( private router:Router ,private loginserv:LoginService ,private toogle:DoctorOrpatinteService){
}
  form = new FormGroup({
    email: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required]),
    
  });

  docform = new FormGroup({
    email: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required]),
    
  });

  handleSubmit(e: Event): void {
    e.preventDefault();
  }

patint(){
  this.ispatint=true;
  this.isdoctor=false
  this.toogle.isdoctor$.next(false)
}
doctor(){
  this.isdoctor=true;
  this.ispatint=false;
  this.toogle.isdoctor$.next(true)
}




  login(){
     
    let userdata:loginDto={
    userName: this.form.controls.email.value!,
    password: this.form.controls.password.value!
    }

    this.loginserv.login(userdata).subscribe((respons)=>{
      this.router.navigateByUrl("/")
      console.log(respons.token);
      
    })
  }

  doclogin(){
     
    let docdata:loginDto={
    userName: this.docform.controls.email.value!,
    password: this.docform.controls.password.value!
    }

    this.loginserv.login(docdata).subscribe((respons)=>{
      this.router.navigateByUrl("/")
      console.log(respons.token);
      
    })
  }
}

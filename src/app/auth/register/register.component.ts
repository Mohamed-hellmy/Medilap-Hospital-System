import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { paitentRegster } from 'src/app/interfases/interfaces';
import { RegisterService } from 'src/app/services/register.service';
// import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor( private regster:RegisterService , private router:Router) {}

  form = new FormGroup({
    fName: new FormControl<string>('',[
      Validators.required,
    ]),
    lName : new FormControl<string>('',[
      Validators.required,
    ]),
    email : new FormControl<string>('',[
      Validators.required,
    ]),
    mobile: new FormControl<number>(0,[
      Validators.required,
    ]),
    dob : new FormControl<string>('',[
      Validators.required
    ]),
    gender : new FormControl<string>('',[
      Validators.required,
    ]),
    password : new FormControl<string>('',[
      Validators.required,
      Validators.minLength(8)
    ]),
    address: new FormControl<string>('',[
      Validators.required,
    ])
  })

  handleSubmit(e:Event):void {
    e.preventDefault();
  }

submitUserData(){
  let userData:paitentRegster={
    firstName:this.form.controls.fName.value! ,
    lastName: this.form.controls.lName.value!,
    email: this.form.controls.email.value!,
    phoneNumber: this.form.controls.mobile.value!,
    gender: this.form.controls.gender.value!,
    address: this.form.controls.address.value!,
    password: this.form.controls.password.value!,
    confirmPassword: this.form.controls.password.value!,
    birthDate: this.form.controls.dob.value!
  }

  this.regster.sendUserData(userData).subscribe({
   
    next:(response)=>{
       this.router.navigateByUrl("/auth/login")
    }
  })
}

  ngOnInit(): void {
   
  }
}

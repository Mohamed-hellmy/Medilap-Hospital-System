import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'Medilap-Hospital';
 constructor(private check:LoginService){}

 ngOnInit(): void {
   if(localStorage.getItem("token")){
    this.check.islogin$.next(true)
   }
 }

}
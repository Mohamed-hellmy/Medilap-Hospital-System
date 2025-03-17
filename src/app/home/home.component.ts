import { Component , OnInit } from '@angular/core';
import * as Aos from 'aos'
import { DoctorsService } from '../services/doctors.service';
import { Department, Doctor } from '../interfases/interfaces';
import { faSearch, faHospital ,faArrowDown ,faStethoscope ,
  faUserDoctor ,faStar,faStarHalf,faLocationPin,faMoneyBill1Wave,faClock,faPhone
 } from '@fortawesome/free-solid-svg-icons';
import { DepartmentsService } from '../services/departments.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  star=faStar
  hstar=faStarHalf

doctorsdata?:Doctor[]
departments?:Department[]

  constructor(private doctors:DoctorsService ,private dept:DepartmentsService){}
  
 ngOnInit(): void {
   
  Aos.init()

  this.doctors.getdoctors().subscribe({
    next:(data)=>{
       
      this.doctorsdata=data.splice(0,12)
      console.log(this.doctorsdata);
      
    },
    error:(error)=>{
      console.log(error);
      
    }
  })

this.dept.getDepartments().subscribe({
  next:(data)=>{
    
    this.departments=data
  }
})
  
 }

  slides = [
    {img: "../../assets/-دكتور-عظام-في-جدة-5-e1650985691188.jpg"},
    {img: "../../assets/القلب12.jpg"},
    {img: "../../assets/tbl_articles_article_30917_1037069778b-0e66-4f05-9169-ae27cf604807.jpg"},
    {img: "../../assets/download (2).jpg"},
    {img: "../../assets/slideshowslide_sss_6500_24447249fc9-adc4-4fb7-a655-bc91779557b7.jpg"}
  ];

    slideConfig = {
      'slidesToShow': 3,
      'slidesToScroll': 3,
      initialSlide: 0,
         "autoplay":true,
         "autoplaySpeed":5000,
         "pauseOnHover":true,
      'dots': false,
      'arrows': false,
      'infinite': true,
      'mobileFirst': false,
      'focusOnSelect': true,
      'respondTo': 'window',
      rows: 1,
      'responsive': [{
      'breakpoint': 970,
      'settings': {
      
          'slidesToShow': 2,
          'slidesToScroll': 1,
          'initialSlide': 1,
          'arrows':false,
          dots: false
        }
      },
      {
        'breakpoint': 760,
        'settings': {
        
            'slidesToShow': 1,
            'slidesToScroll': 1,
            'initialSlide': 1,
            'arrows':false,
            dots: true
          }
        }]
  

}
}
import { Component, EventEmitter, OnInit, Output ,OnChanges } from '@angular/core';
import {
  faSearch, faHospital, faArrowDown, faStethoscope,
  faUserDoctor, faStar, faStarHalf, faLocationPin, faMoneyBill1Wave, faClock, faPhone
} from '@fortawesome/free-solid-svg-icons';
import { HospitalService } from '../services/hospital.service';
import { BookingDto, Department, DeptDoctor, Doctor, Hosptial, doctorschedulesDto } from '../interfases/interfaces';
import { DepartmentsService } from '../services/departments.service';
import { DoctorService } from '../services/doctor.service';

import { TimesService } from '../services/times.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit  {

  constructor(private hospital: HospitalService,
     private departments: DepartmentsService ,
     private doctordata:DoctorService,
     private getdoctime: TimesService) { }
  fahosbital = faHospital;
  arrowd = faArrowDown
  Stethoscope = faStethoscope
  doctorhead = faUserDoctor
  search = faSearch
  star = faStar
  hstar = faStarHalf
  location = faLocationPin
  money = faMoneyBill1Wave
  clock = faClock
  phone = faPhone

  isdatasucsess:boolean=false;

  hospitals?: Hosptial[];
  departs?: Department[];
  deptIds: number[] = [];
  deptNames: Department[] = [];
  doctorsNames: DeptDoctor[] = [];
  spatializ: string = '';
  hospitalName: string = '';
  doctorsData?:Doctor[]
  doctornameBySearch?:DeptDoctor[]
  doctorsForLoop:DeptDoctor[]=[]

  doctor?:Doctor



  ngOnInit(): void {
    this.hospital.gethospitals().subscribe({
      next: (data) => {
        this.hospitals = data
        this.hospitalName = data[0].name
        this.getdeptnum()
        
        console.log();
        
        
      this.departments.getDepartments().subscribe({
      next: (depart) => {
        this.departs = depart
        this.spatializ = depart[0].name
        this.getspasifcDeptForCurntHos()
        
         }
        })
      }
    })
     
    this.doctordata.getDoctor().subscribe({
    
      next:(data)=>{
        this.doctorsData=data
        
        console.log(this.doctorsData);
        
      }
    })
  }



  getdeptnum() {
    this.hospitals?.forEach(hos => {
      if (this.hospitalName == hos.name) {
        (hos.depatment).forEach(dept => {
          this.deptIds.push(dept.id)
        });
      }
    });


  }

  getspasifcDeptForCurntHos() {
    this.deptNames = []
    this.doctorsNames = []
    this.departs?.forEach(dept => {
      this.deptIds.forEach(id => {
        if (dept.id == id) {
          this.deptNames?.push(dept);
        }
      });
    });
    
    this.getdoctors()
  }


  getdoctors() {
    this.deptNames.forEach(dep => {
      dep.doctors.forEach(doc => {
        if (doc.departmentname == this.spatializ) {
          this.doctorsNames.push(doc)
          this.doctorsForLoop=this.doctorsNames
        }
      })

    });
  }

  getDepartmentName(value: string) {
    this.spatializ = value
    this.doctor=undefined
    
    this.getspasifcDeptForCurntHos()
    

  }


  getHospitalValue(value: string) {
   
    this.hospitalName = value
    this.doctor=undefined
    
    this.deptIds=[]
    this.getdeptnum()
    this.spatializ=this.deptNames[0].name
    this.getspasifcDeptForCurntHos()

  }
  
  istrue(e:boolean){
   
    this.isdatasucsess=e
  }

  searchDoctor(e:Event){
    let val=(e.target as HTMLInputElement).value
   if(val.length>0){
    this.doctornameBySearch= this.doctorsNames.filter(name=> name.name.includes(val))
    console.log(this.doctornameBySearch);
    this.doctorsForLoop=this.doctornameBySearch
   }
   else{
     
    this.doctorsForLoop=this.doctorsNames

   }
  }

  getSpasifcDotorData(e:Event){ 
    this.isdatasucsess=false
    this.doctor=undefined
   
    let id=(e.target as HTMLSelectElement).value

    this.doctordata.getDoctorById(id).subscribe({
      next:(data)=>{
        this.doctor=data;
      }
    })
    
   }

}

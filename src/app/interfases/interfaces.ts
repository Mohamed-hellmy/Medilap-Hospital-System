
/********************start of Hospital api*******************************/
export interface Hosptial {
    id: number;
    address: string;
    name: string;
    depatment: {
        id: number
        name: string;
        deptImage: string,
        discription: string
    }[]

}

export interface HosDept{

    id: number
        name: string;
        deptImage: string,
        discription: string
}

export interface doctorToConsultant{
    doctorID:string,
    doctorname:string,
    patientId:string,
    bookId:string
}

export interface Product {
    name: string,
    catogryId: number,
    vendors: string[],
    isAvalaible: boolean,
    Quantity: number

}

/********************end of Hospital api*******************************/




/********************start of Department api*******************************/

export interface Department {
    id: number;
    name: string;
    deptImage: string,
    discription: string
    doctors: {
        id: number;
        name: string;
        profilePic: string;
        departmentname: string;
    }[]

}

export interface DeptDoctor{
    id: number;
    name: string;
    profilePic: string;
    departmentname: string;
}

/********************end of Department api*******************************/







/********************start of doctor api*******************************/
/// doctor profile contain two api :
///1- his inforamtion
///2- today booking (patient list in current day)


//1-api of information 
//for single doctor by id and for list of doctor but you will write [] doctor

export interface Doctor {
    id: string;
    name: string;
    profilePic: string;
    deptname: string;
    description: string;
    price: number;
}


//2-api of patientList in current day
export interface DoctorBookDto {
    id:string;
    patID: string;
    patName: string | null;
    dateOfBook: string;
    timeOfBook: string;
    status:boolean
}
//  ليه ببعت جدول الحجوزات بتاع الناس الي جاية الي فوق ده عشان لما الدكتور يعمل كليك علي المريض يفتحله صفحة السجل المرضي ف الدكتور يكتبب فيه الحالة والعلاج بتاع الكشف ده و الصفحة دي هيكون شكل الداتا الي الدكتور هيملاها زي تشخيص الحالة والكشف هتلاقيها ف الاي بي اي الي جاي بتاع المريض

//**************************end of doctor api*******************************************/ 





/********************start of patient api*******************************/
//get method this for 

export interface Patient {
    id: string;
    name: string;
    phonenumber: number;
    email: string;
    birthDate: string;
    address: string;
    diseases: {
        diseaseName: string,
        diseaseDetails: string,
        diseasetreatment: string,
        doctorName: string,

    }[]
}


export interface paitentRegster{
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: number,
  gender: string,
  address: string,
  password: string,
  confirmPassword: string,
  birthDate: string
}

// Post method ==> this if from that doctor will submit 
// الي جايي دي الدكتور هو الي هميلاها يعني لما الدكتور يبقي عنده ليست الحجوزات الي اتكلمنا عليها فوق لما يعمل كليك هيفتح صفحة فيها هيلاقي فيها اسم المريض وكل البيانات بتعته ظاهرة ف هيكتب المريض ووصفى والعلاج ف انا بقي عايز شكل الداتا الي تيجي بالطريقة الي جاية دي

export interface Disease {
    diseaseName: string;
    diseaseDetails: string;
    diseasetreatment: string,
    patientid: string;
    patientName: string;
    doctorId: string;
    doctorName: string; 
}


//**************************end of paitent api*******************************************/ 















/********************start of booking api*******************************/
//get Method by id for doctor 
export interface doctorschedulesDto {
    day: string;
    workScheduleTime: [
       { time: string,
        status: boolean}

    ];
}
//Post Method
//when patient submit i want this data
export interface BookingDto {
    dateOfBook: string;//===>> 2023-11-06
    timeOfBook: string;//===>> 13:10:00
    patSubmitDate: string;
    patSubmitTime: string;
    patName?: string;
    email?: string;
    number?: number;
    patId?: string;
    doctorId?: string;
    status:boolean
}
/**************************end of booking api*******************************************/








///// ملحوظات
///لما تيجي تبعت تاريخ ابعته كده
//2023-11-06


///لما تيجي تبعت وقت ابعته كده

//13:20:00 دي معناها الساعة 1 و عشرين دقيقة



//الي جاي ده مثال ل ازاي تبعت الحجز 
/*
{
    "dateOfBook": "2023-11-06",
    "timeOfBook": "13:10:00",
    "patSubmitDate": "2023-11-06",
    "patSubmitTime": "09:00:00",
    "patName": "John Doe",
    "email": "john.doe@example.com",
    "number": 123,
    "patId": 1,
    "doctorId": 1
}



*/

export interface loginDto{
    userName: string,
    password: string
}

export interface tokenDto{
 token:string;
}

export interface tokenDecode{
    idOfCurrentUser:string;
   }









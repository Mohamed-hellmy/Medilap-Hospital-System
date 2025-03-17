import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core'

export const authoraizationGuard: CanActivateFn = (route, state) => {

  const router= inject(Router)
  
  if(localStorage.getItem("token")){
    return true;
  }else{
    
    router.navigateByUrl("/auth/login")
    return false
  }


};

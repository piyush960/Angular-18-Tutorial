import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MasterService } from '../service/master.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  
  let router = inject(Router);
  let service = inject(MasterService);

  // if(route.url.length > 0){
  //   if(route.url[0].path === 'about'){
  //     alert("You don't have access")
  //     return false;
  //   }
  //   else return true;
  // }
  // else return true;

  if(!service.checkAuthorization()){
    router.navigateByUrl('/login')
    alert('unauthorized access')
    return false;
  }
  else return true;

  

};

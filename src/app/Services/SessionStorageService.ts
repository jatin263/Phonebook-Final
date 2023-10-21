import {Injectable} from '@angular/core';

@Injectable({
    providedIn:'root',
})

export class SessionStorageService{


    getLoginStatus(){
       let s:string=sessionStorage.getItem('loginStatus')??"";
       return s=='true'?true:false;
    }

    setLoginStatus(f:boolean){
        if(f){
            sessionStorage.setItem('loginStatus','true');
        }
        else{
            sessionStorage.setItem('loginStatus','false');
        }
    }

}
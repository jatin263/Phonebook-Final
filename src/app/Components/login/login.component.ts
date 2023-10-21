import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'src/app/Services/SessionStorageService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('userEmail') userEmail:ElementRef | undefined;
  @ViewChild('userPassword') userPassword:ElementRef | undefined;
  wrongMsg:boolean=false;
  emailRequied:boolean=false;
  passwordRequied:boolean=false;
  validEmail:boolean=false;

  loginUser(){
    let uEmail = this.userEmail?.nativeElement.value;
    let uPassword=this.userPassword?.nativeElement.value;
    if(uEmail==''&& uPassword==''){
      this.emailRequied=true;
      this.passwordRequied=true;
    }
    else{
      if(uEmail=='' && uPassword!=''){
        this.emailRequied=true;
        this.passwordRequied=false;
      }
      else{
        if(uPassword=='' && uEmail!=''){
          this.emailRequied=false;
          this.passwordRequied=true;
        }
        else{
          this.emailRequied=false;
          this.passwordRequied=false;
        }
      }
    }
    if(this.emailRequied===false && this.passwordRequied===false){
      if( this.validEmail===false){
        // console.log("hii");
        if( this.userEmail?.nativeElement.value=='admin@admin.com' && this.userPassword?.nativeElement.value=='admin'){
          this._service.setLoginStatus(true);
          this._router.navigate(['/Home']);
        }
        else{
          alert("Wrong User Name or Password");
          if (this.userEmail && this.userEmail.nativeElement) {
            this.userEmail.nativeElement.value = '';
          }
          if (this.userPassword && this.userPassword.nativeElement) {
            this.userPassword.nativeElement.value = '';
          }
        }
      }
      else{
        this.validEmail=false;
      }
    }
    else{
      if(uEmail==''&& uPassword==''){
        this.emailRequied=true;
        this.passwordRequied=true;
      }
      else{
        if(uEmail==''){
          this.emailRequied=true;
          this.passwordRequied=false;
        }
        else{
          if(uPassword==''){
            this.emailRequied=false;
            this.passwordRequied=true;
          }
        }
      }
    }
  }

  constructor(private _service:SessionStorageService, private _router:Router){}
  checkEmail(e:string){
    if(e.indexOf('@')<0 || e.indexOf('.')<0){
      this.validEmail=true;
    }
    else{
      this.validEmail=false;
    }
  }
}

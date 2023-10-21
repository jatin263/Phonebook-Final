import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nameRequied:boolean=false;
  emailRequied:boolean=false;
  emailValid:boolean=false;
  passwordRequied:boolean=false;
  @ViewChild('newName') newName:ElementRef|undefined;
  @ViewChild('newEmail') newEmail:ElementRef|undefined;
  @ViewChild('newPassword') newPassword:ElementRef|undefined;

  registerUser(){

  }

  checkEmail(e:string){
    if(e.indexOf('@')<0 || e.indexOf('.')<0){
      this.emailValid=true;
    }
    else{
      this.emailValid=false;
    }
  }
}

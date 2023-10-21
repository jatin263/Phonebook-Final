import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'src/app/Services/SessionStorageService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title:string="PhoneBook"
  loginStatus:boolean=false;

  constructor(private _sevice:SessionStorageService,private _router:Router){}

  ngOnInit(){
    this.loginStatus=this._sevice.getLoginStatus();
    if(this.loginStatus){
      let currentUrl = this._router.url.toLowerCase();
      if(currentUrl.indexOf('login')>0 || currentUrl.indexOf('register')>0 || currentUrl=='/'){
        this._router.navigate(['/Home']);
      }
      //console.log(this._router.url);
    }
  }
}

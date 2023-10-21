import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'src/app/Services/SessionStorageService';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _service:SessionStorageService,private _router:Router){}
  secTime=5;
  ngOnInit(){
    let f= setInterval(()=>{
      this.secTime--;
    },1000);
    this._service.setLoginStatus(false);
    setTimeout(()=>{
      clearInterval(f);
      this._router.navigate(['/']);
    },5000)
  }
}

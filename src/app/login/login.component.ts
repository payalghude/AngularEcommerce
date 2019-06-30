import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CookieService } from 'angular2-cookie/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string ;
  password: string ;
  constructor(private router: Router, private _cookieService:CookieService) { }

  ngOnInit() {
  
  }
  getCookie(key: string){
    return this._cookieService.get(key);
  }

validateUser()
{
  console.log("method call") ; 
  debugger;
   if(this.username != null && this.password !=null)
   {
     if((this.username =="admin" || this.username=="user") && this.password=="123")
     {
       console.log("login sucessfully");
       this._cookieService.put('_verificationToken', this.username);
       console.log("Set Test Cookie as Test");
       this.router.navigate(['/dashboard']);
     }
   }
}

}

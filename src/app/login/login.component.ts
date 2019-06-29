import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string ;
  password: string ;
  constructor(private router: Router) { }

  ngOnInit() {
  }

validateUser()
{
  console.log("method call") ; 
  debugger;
   if(this.username != null && this.password !=null)
   {
     if(this.username =="hemanth" && this.password=="123")
     {
       console.log("login sucessfully");
       this.router.navigate(['/dashboard']);
     }
   }
}

}

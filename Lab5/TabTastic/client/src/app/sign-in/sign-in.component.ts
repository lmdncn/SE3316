import { Component, OnInit } from '@angular/core';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers:[AccountService]
})
export class SignInComponent implements OnInit {

  username:string="";
  password:string="";

  constructor(private accountService:AccountService) { }

  ngOnInit() {
  }

 SignIn(){
    if(this.accountService.logInAccount(this.username,this.password))
    {
      console.log("Logged On")

    }else{
      //Invalid Log On

      console.log("Invalid Log On")

    }

 }

}

import { Component, OnInit } from '@angular/core';
import {AccountService} from '../account.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers:[AccountService]
})
export class SignUpComponent implements OnInit {
  username:string="";
  password:string="";
  email:string="";

  constructor(private accountService:AccountService) { }

  ngOnInit() {
  }

  createAccount(){
    
    this.username="";
    this.password="";
    this.email="";
  }
}

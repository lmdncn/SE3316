import { Injectable } from '@angular/core';
import {ConfigService} from './config.service';
import{User} from './user';

@Injectable()
export class AccountService {

  constructor(private configService : ConfigService) { }

  createAccount(un:string, em:string, p:string){

    //Create a new user

}

  logInAccount(un:string, p:string){


  
  }



}

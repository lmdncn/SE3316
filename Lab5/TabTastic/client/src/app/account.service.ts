import { Injectable } from '@angular/core';
import {ConfigService} from './config.service';
import{User} from './user';

@Injectable()
export class AccountService {

  constructor(private configService : ConfigService) { }

  createAccount(un:string, em:string, p:string){

    //Create a new user

    this.configService.addAccount(new User(un,em,p));
}

  logInAccount(un:string, p:string){

    let n = this.configService.getAccount(un);

    if(n==null){
      //User with that username doesn't exist
      return false;
    }else {

      if (n.password == p) {
        //Password Correct
        //Log In


        return true;
      }else{

        //Password Incorrect

        return false;

      }


    }

  }



}

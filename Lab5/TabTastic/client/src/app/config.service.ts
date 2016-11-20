
//General Configurations static


import { Injectable } from '@angular/core';
import{User} from './user';


@Injectable()
export class ConfigService {

  static users  = new Array<User>();

  constructor() { }

  static MainHeading: string = "This is TabTastic!";

  addAccount(u:User){

    ConfigService.users.push(u);
  }

  getAccount(username:string){

    for(let i = 0; i<ConfigService.users.length;i++)
    {
      if(username = ConfigService.users[i].username){
        return ConfigService.users[i];
      }

    }
    return null;
  }

}

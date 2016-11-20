
//General Configurations static


import { Injectable } from '@angular/core';
import{User} from './user';


@Injectable()
export class ConfigService {

  static users  = new Array<User>();

  constructor() { }

  static MainHeading: string = "This is TabTastic!";

  

}

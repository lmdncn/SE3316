import { Injectable } from '@angular/core';
import{User} from './user';
import{Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AccountService {

  constructor(private http:Http) { 

 console.log("task service init");

}


}

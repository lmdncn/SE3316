/**
 * Created by L1amDuncan on 2016-11-20.
 */

//This defines a User object


export class User {
  id:number;
  username:string;
  email:string;
  password:string;



  constructor(username:string, email:string,  password:string) {
    this.email = email;
    this.username = username;
    this.password = password;
  }



}

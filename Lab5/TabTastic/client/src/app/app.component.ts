import { Component } from '@angular/core';

import{AuthService} from './services/auth.service';

import{TabsService} from "./services/tabs.service";
import {Tab} from './models/tab';
// import{AuthService} from './auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ["./app.component.css"],
})
export class AppComponent{
  title:String = 'TabTastic!';
  entry: Boolean = true;
  signedIn:boolean = false;



  constructor(private authService: AuthService){
  }

  closeLanding()
{
  this.entry = false;
}

}

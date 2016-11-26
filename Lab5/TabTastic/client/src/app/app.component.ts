import { Component } from '@angular/core';


import{TabsService} from "./tabs.service";
import {Tab} from './tab';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ["./app.component.css"],
})
export class AppComponent{
  title:String = 'TabTastic!';
  entry: Boolean = true;
  signedIn:boolean = false;



  constructor(){
  }

  closeLanding()
{
  this.entry = false;
}

}

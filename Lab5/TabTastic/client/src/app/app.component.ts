import { Component } from '@angular/core';


import{TabsService} from "./tabs.service";
import {Tab} from './tab';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'TabTastic!';

  signedIn:boolean = false;



  constructor(){
  }



}

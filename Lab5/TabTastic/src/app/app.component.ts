import { Component } from '@angular/core';
import {ConfigService} from './config.service';

import {Tab} from './tab';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'TabTastic!';
  heading = ConfigService.MainHeading;

  signedIn:boolean = false;




  constructor(){


  }



}

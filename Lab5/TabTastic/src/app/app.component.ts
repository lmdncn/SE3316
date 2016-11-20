import { Component } from '@angular/core';
import {ConfigService} from './config.service';

import {Tab} from './tab';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TabTastic!';
  heading = ConfigService.MainHeading;

  featured:Array<Tab>;


  constructor(){

    this.featured = [
      new Tab(122,"take it easy","eagles","the best ever","Liam",223 ),
      new Tab(122,"take it easy","eagles","the best ever","Liam",223 ),
     new Tab(9797,"Song Name","Song Artist","Tab Discription","Tab Author", 999 )
    ]

  }
}

import { Component, OnInit } from '@angular/core';
import{Tab} from '../tab';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  inputs: ['featured']
})

export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToTab(tId:number){
    console.log("Going to tab : " + tId);


  }

}

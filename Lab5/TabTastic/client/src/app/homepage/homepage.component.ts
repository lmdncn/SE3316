import { Component, OnInit } from '@angular/core';
import{Tab} from '../tab';

import{TabsService} from "../tabs.service";



@Component({
  // moduleId: module.id,
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  errorMessage:string;
  allTabs:Tab[];
  mode ='Observable';

  constructor(private tabsSerivice:TabsService) { 
  }


  goToTab(t:Tab){
    this.tabsSerivice.setOpentab(t);
  }

  

  ngOnInit():any{
    this.getAllTabs();
    
  }


  getAllTabs(){

    this.tabsSerivice.getTabs().subscribe(tabs => this.allTabs = tabs,
    error => this.errorMessage = <any>error );

    console.log(JSON.stringify(this.allTabs));


  }
}

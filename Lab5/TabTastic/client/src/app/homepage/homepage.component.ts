import { Component, OnInit } from '@angular/core';
import { Tab } from '../tab';
import { Observable } from "rxjs/Observable"
import { TabsService } from "../tabs.service";



@Component({

  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  errorMessage: string;
  allTabs: Tab[];

  constructor(private tabsService: TabsService) {

  }


  goToTab(t: Tab) {
    this.tabsService.setOpentab(t);
  }

  whatAreTabs(){
console.log("Current tabs are : " + JSON.stringify(this.allTabs));


  }

  ngOnInit(): any {
    this.tabsService.getTabs()
      .subscribe(
      tabs => {this.allTabs = tabs;});
  }


}

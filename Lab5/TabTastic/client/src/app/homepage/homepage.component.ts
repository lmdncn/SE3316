import { Component, OnInit } from '@angular/core';
import{Tab} from '../tab';

import{TabsService} from "../tabs.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers:[TabsService]
})

export class HomepageComponent implements OnInit {


  allTabs:Tab[];

  constructor(private tabsService: TabsService) { 

    this.tabsService.getTabs().subscribe(tabs => {

    this.allTabs = tabs;

    });

  }


  goToTab(t:Tab){
    this.tabsService.setOpentab(t);
  }

  

  ngOnInit():any{
  }
}

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


  featured:Array<Tab>;

  constructor(private tabsService: TabsService) { }


  goToTab(t:Tab){
    console.log("Going to tab : " + JSON.stringify(t));


  }

  getFeatured(){

    this.featured = this.tabsService.getFeaturedTabs();
  }

  ngOnInit():any{
    this.getFeatured();
  }
}

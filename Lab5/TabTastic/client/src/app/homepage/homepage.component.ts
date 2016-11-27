import { Component, OnInit } from '@angular/core';
import { Tab } from '../tab';
import { Observable } from "rxjs/Observable";
import { TabsService } from "../tabs.service";
import{AuthService} from '../auth.service';


@Component({

  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  errorMessage: string;
  allTabs: Tab[];
  myPrivTabs: Tab[];
  myPubTabs: Tab[];
  constructor(private tabsService: TabsService,private authService: AuthService) {

  }


  goToTab(t: Tab) {
    this.tabsService.setOpentab(t);
  }

  ngOnInit(): any {
    this.tabsService.getTabs()
      .subscribe(
      tabs => {this.allTabs = tabs;});

if(this.authService.loggedIn()){
   this.tabsService.getMyPrivateTabs()
      .subscribe(
      tabs => {this.myPrivTabs = tabs;});}


         this.tabsService.getMyPublicTabs()
      .subscribe(
      tabs => {this.myPubTabs = tabs;});}

  }


}

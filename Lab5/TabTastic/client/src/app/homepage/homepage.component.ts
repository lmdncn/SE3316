import { Component, OnInit } from '@angular/core';
import { Tab } from '../models/tab';
import { Observable } from "rxjs/Observable";
import { TabsService } from "../services/tabs.service";
import { AuthService } from '../services/auth.service';


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
  showTable: String = 'public';
  myFavTabs: Tab[];
  policyshow = false;
  dmcashow = false;

  constructor(private tabsService: TabsService, private authService: AuthService) {

  }




  goToTab(t: Tab) {
    this.tabsService.setOpentab(t);
  }

  ngOnInit(): any {
    this.tabsService.getTabs()
      .subscribe(
      tabs => { this.allTabs = tabs; });

    if (this.authService.loggedIn()) {

      this.tabsService.getMyPrivateTabs()
        .subscribe(
        tabs => { this.myPrivTabs = tabs; });



      this.tabsService.getMyPublicTabs()
        .subscribe(
        tabs => { this.myPubTabs = tabs; });
    }

  }

  showPP() {
    if (this.policyshow) {
      this.policyshow = false;
    } else {
      this.policyshow = true;
    }

  }

   showDmca() {
    if (this.dmcashow) {
      this.dmcashow = false;
    } else {
      this.dmcashow = true;
    }

  }

  show(s: string) {
    this.showTable = s;
  }


}

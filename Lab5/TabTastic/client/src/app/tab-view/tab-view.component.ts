import { Component, OnInit } from '@angular/core';
import { Tab } from '../tab';
import { AuthService } from '../auth.service';
import { TabsService } from "../tabs.service";


@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.css']
})
export class TabViewComponent implements OnInit {

  viewTab: Tab;
  tabParsed: String = "";


  constructor(private tabsService: TabsService, private authService: AuthService) {
  }

  ngOnInit() {
    this.viewTab = this.tabsService.openTab;
    if (this.viewTab != null) {
      this.tabParsed = this.chordpro(this.viewTab.tab);
    }
  }

  deleteTab() {
    this.tabsService.deleteTab(this.viewTab).subscribe();
  }

  chordpro(t: String): String {
    let temp = t;
    let index = 0;
    while (index < t.length / 2) {
      temp = temp.replace('[', '</span><strong>');
      temp = temp.replace(']', '</strong><span>');
      index++;
    }
    temp = "<span>"+temp+"</span>"
    return temp;
  }





}


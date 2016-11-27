import { Component, OnInit } from '@angular/core';
import{Tab} from '../tab';

import{TabsService} from "../tabs.service";


@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.css']
})
export class TabViewComponent implements OnInit {

  viewTab:Tab;



  constructor(private tabsService:TabsService) {
   }

  ngOnInit() {
    this.viewTab = this.tabsService.openTab;
  }

}

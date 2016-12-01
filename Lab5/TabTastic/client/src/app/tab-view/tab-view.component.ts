import { Component, OnInit } from '@angular/core';
import { Tab } from '../models/tab';
import { AuthService } from '../services/auth.service';
import { TabsService } from "../services/tabs.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.css']
})
export class TabViewComponent implements OnInit {


  tabEditBackup: Tab;
  tabParsed: String = "";
  fullScreen: Boolean = false;
  edit: Boolean = false;

  constructor(private tabsService: TabsService, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  deleteTab() {
    this.tabsService.deleteTab(this.tabsService.openTab).subscribe();
  }



  fullscreen(b: Boolean) {
    this.fullScreen = b;
  }

  editTab(b: Boolean) {
    this.edit = b;
    this.tabEditBackup = new Tab(this.tabsService.openTab.song, this.tabsService.openTab.artist,
      this.tabsService.openTab.desc, this.tabsService.openTab.author, this.tabsService.openTab.authorId,
      this.tabsService.openTab.tab, this.tabsService.openTab.isPublic)


  }

  changeTab() {
    this.tabsService.changeTab().subscribe();
    this.edit = false;
    this.tabEditBackup = null;
  }

  cancelEdit() {
    this.edit = false;
    this.tabsService.openTab = this.tabEditBackup;
    this.tabsService.setOpentab(this.tabEditBackup);
  }

}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../services/auth.service';
import { TabsService } from '../services/tabs.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  search: string;

  constructor(private router: Router, private authService: AuthService, private ts: TabsService) {
    this.search = "";
  }

  ngOnInit() {
  }

  searchTabs() {

    console.log("Searching for " + this.search);
    this.search = "";
  }

  logoutAcc() {
    this.authService.logout();
    this.ts.setOpentab(null);
  }



}

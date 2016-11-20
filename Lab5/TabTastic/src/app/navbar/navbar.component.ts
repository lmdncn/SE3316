import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  search:string;

  constructor() {
    this.search="";
  }

  ngOnInit() {
  }

  searchTabs(){

    console.log("Searching for "+this.search);
    this.search="";
  }

}

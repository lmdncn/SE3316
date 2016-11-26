import { Component, OnInit } from '@angular/core';
import{Tab} from '../tab';
import{TabsService} from "../tabs.service";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';



@Component({
  selector: 'app-add-tab',
  templateUrl: './add-tab.component.html',
  styleUrls: ['./add-tab.component.css'],
  
})
export class AddTabComponent implements OnInit {


  toaddTab : Tab;
  addTabForm: FormGroup;
  tabAdded: Boolean =false;


  constructor(private tabsService:TabsService, fb: FormBuilder) {
    this.addTabForm= fb.group({
  song: ['', Validators.required],
  artist: ['', Validators.required],
  desc: ['',Validators.nullValidator],
  author: ['',Validators.required],
  authorId: ['',Validators.nullValidator],
  tab: ['', Validators.required],
  });
  }

  ngOnInit() {
     
  }

  addTabSubmit(){

  this.toaddTab =    this.addTabForm.value;

  console.log(JSON.stringify(this.toaddTab));
  }

  confirmAddTab(){

    this.addTabForm.reset();
    this.tabAdded = true;
    this.tabsService.createTab(this.toaddTab);
    this.toaddTab = null;



  //Save the Tab through service

  }

  changeAddTab(){

    this.toaddTab = null;
  }

}

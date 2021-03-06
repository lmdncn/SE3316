import { Component, OnInit } from '@angular/core';
import { Tab } from '../models/tab';
import { TabsService } from "../services/tabs.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-add-tab',
  templateUrl: './add-tab.component.html',
  styleUrls: ['./add-tab.component.css'],

})
export class AddTabComponent implements OnInit {


  tabEntry: Tab;
  tabForm: FormGroup;
  complete: string = 'welcome';


  constructor(private tabsService: TabsService, fb: FormBuilder, private authService: AuthService) {
    this.tabForm = fb.group({
      song: ['', Validators.required],
      artist: ['', Validators.required],
      desc: ['', Validators.nullValidator],
      private: [false, Validators.nullValidator],
      tab: ['', Validators.required],
    });
  }

  ngOnInit() {

  }

  addTabSubmit() {


    if (this.tabForm.value.song == '') {
      alert("Enter Song Name");
      return;
    }

    if (this.tabForm.value.artist == '') {
      alert("Enter Song Artist");
      return;
    }

    if (this.tabForm.value.desc == '') {
      alert("Enter Tab Description");
      return;
    }

    if (this.tabForm.value.tab == '') {
      alert("Enter Tab");
      return;
    }

    

    this.tabEntry = new Tab(
      this.tabForm.value.song,
      this.tabForm.value.artist,
      this.tabForm.value.desc,
      this.authService.nickname,
      this.authService.userId,
      this.tabForm.value.tab,
      !(this.tabForm.value.private),
      null,
      null,
      1);

    this.complete = 'nothing';
  }

  confirmAddTab() {

    var test = null;

    this.tabsService.createTab(this.tabEntry).subscribe(res => { test = res; });

    this.tabForm.reset();
    this.tabEntry = null;
    this.complete = 'added';


  }

  changeAddTab() {
    this.tabEntry = null;
  }


  clearForm() {
    if(confirm("Are You sure you want to clear?")){
    this.tabForm.reset();}
  }

}

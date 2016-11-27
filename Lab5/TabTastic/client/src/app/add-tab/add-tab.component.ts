import { Component, OnInit } from '@angular/core';
import { Tab } from '../tab';
import { TabsService } from "../tabs.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-add-tab',
  templateUrl: './add-tab.component.html',
  styleUrls: ['./add-tab.component.css'],

})
export class AddTabComponent implements OnInit {


  tabEntry: Tab;
  tabForm: FormGroup;
  complete: string = 'welcome';


  constructor(private tabsService: TabsService, fb: FormBuilder) {
    this.tabForm = fb.group({
      song: ['', Validators.required],
      artist: ['', Validators.required],
      desc: ['', Validators.nullValidator],
      author: ['', Validators.required],
      authorId: ['', Validators.nullValidator],
      tab: ['', Validators.required],
    });
  }

  ngOnInit() {

  }

  addTabSubmit() {

    this.tabEntry = new Tab(
      this.tabForm.value.song,
      this.tabForm.value.artist,
      this.tabForm.value.desc,
      this.tabForm.value.author,
      this.tabForm.value.authorId,
      this.tabForm.value.tab
    );

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

}

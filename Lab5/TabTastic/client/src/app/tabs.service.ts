import { Injectable } from '@angular/core';
import{Tab} from './tab';

@Injectable()
export class TabsService {

  constructor() { }


  getFeaturedTabs() {
    return new Array<Tab>(
      new Tab(122, "take it easy", "eagles", "the best ever", "Liam", 223),
      new Tab(122, "take it easy", "eagles", "the best ever", "Liam", 223),
      new Tab(9797, "Song Name", "Song Artist", "Tab Discription", "Tab Author", 999)
    );
  }
}

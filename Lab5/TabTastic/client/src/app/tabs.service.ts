import { Injectable } from '@angular/core';
import{Tab} from './tab';
import{Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TabsService {

  openTab:Tab;

  constructor(private http:Http) { 
    console.log("")
  }


  getTabs() {
    return this.http.get('http://localhost:8080/api/tabs')
   .map(res => res.json());
  }

  // createTab(){

  // this.http.get('http://localhost:8080/api/tabs')

  // }

setOpentab(t:Tab){

console.log("Open tab set to: "+ t);

this.openTab =t;
}


}

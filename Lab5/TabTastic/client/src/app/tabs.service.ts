import { Injectable } from '@angular/core';
import{Tab} from './tab';

import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class TabsService {

  openTab:Tab;

  constructor(private http:Http) { 
    console.log("Started Tab Service");

  }


  getTabs():Observable<Tab[]> {

  console.log("Service getting tabs");



    return this.http.get('http://localhost:8080/api/tabs')
    .map(this.extractData)
   .catch(this.handleError);

   }

 



  createTab(){

  // this.http.push('http://localhost:8080/api/tabs')

  }

setOpentab(t:Tab){

console.log("Open tab set to: "+ t);

this.openTab =t;


}


 private extractData(res: Response) {
   console.log("Extracting Data");
    let body = res.json();
    return body.data || { };
  }

 private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure

    console.log("Error with tab retrieval");

    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}

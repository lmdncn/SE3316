import { Injectable } from '@angular/core';
import { Tab } from './tab';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class TabsService {

  openTab: Tab;
  tabApi = 'http://localhost:8080/api/tabs';

  constructor(private http: Http) {
    console.log("Started Tab Service");

  }


  getTabs(): Observable<Tab[]> {

    console.log("Service getting tabs");



    return this.http.get(this.tabApi)
      .map((res: Response) => res.json())
      .catch(this.handleError);

  }





  createTab(t: Tab): Observable<Tab[]> {
    let bodyString = JSON.stringify(t);
    let headers: Headers = new Headers({ 'Content-Type': 'applocation/json' });
    let options = new RequestOptions({ headers: headers });

    console.log("Posting to db");

    return this.http.post(this.tabApi, t, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));

  }

  setOpentab(t: Tab) {

    console.log("Open tab set to: " + t);

    this.openTab = t;


  }



  private handleError(error: Response | any) {
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

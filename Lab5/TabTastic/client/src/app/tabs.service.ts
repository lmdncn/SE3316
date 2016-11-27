import { Injectable } from '@angular/core';
import { Tab } from './tab';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthHttp } from 'angular2-jwt';


@Injectable()
export class TabsService {

  openTab: Tab;
  tabApi = 'api/tabs';
  privatetabApi = 'api/tabs/private';
  constructor(private http: Http,private authHttp: AuthHttp) {
  }


  getTabs(): Observable<Tab[]> {

    return this.http.get(this.tabApi)
      .map((res) => res.json())
      .catch(this.handleError);
  }



  getTab(id) {
    return this.http.get(this.tabApi + '/' + id)
      .map((res: Response) => res.json());
  }




 getPrivateTabs(): Observable<Tab[]> {

    return this.authHttp.get(this.privatetabApi)
      .map((res) => res.json())
      .catch(this.handleError);
  }

 getPrivateTab(id) {
    return this.authHttp.get(this.privatetabApi + '/' + id)
      .map((res: Response) => res.json());
  }





  createTab(t) {
    let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    // console.log("Posting to db" + JSON.stringify(t));

    return this.authHttp.post("api/tabs", JSON.stringify(t), options).map((res) => res.json());

  }



  setOpentab(t: Tab) {

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

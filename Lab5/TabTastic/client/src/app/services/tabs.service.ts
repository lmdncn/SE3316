import { Injectable } from '@angular/core';
import { Tab } from '../models/tab';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthHttp } from 'angular2-jwt';
import { AuthService } from './auth.service';

@Injectable()
export class TabsService {

  openTab: Tab;
  tabApi = 'api/tabs';

  constructor(private http: Http, private authHttp: AuthHttp, private authService: AuthService) {
  }


  getDmcas(){
    return this.http.get('api/dmca')
      .map((res) => res.json())
      .catch(this.handleError);
  }


  getTabs(): Observable<Tab[]> {

    return this.http.get(this.tabApi)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  getOpenTab(): Tab {
    if (this.openTab == null && this.authService.loggedIn()) {
      let t = JSON.parse(localStorage.getItem('opentab'));
      if (t != null) {
        this.openTab = t;
        return t;
      }
    }
    return this.openTab;
  }



  getTab(id) {
    return this.http.get(this.tabApi + '/' + id)
      .map((res: Response) => res.json());
  }

  chordpro(t: String): String {
    let temp = t;
    let index = 0;
    while (index < t.length / 2) {
      temp = temp.replace('[', '</p><span class="chord">');
      temp = temp.replace(']', '</span><p class="lyrics">');
      index++;
    }
    temp = "<pre><p class='lyrics'>" + temp + "</p></pre>"
    
    index=0;
     while (index < t.length / 2) {
       temp = temp.replace('<p class="lyrics"></p>', '<p class="lyrics">-----------</p>');
       temp = temp.replace('<p class="lyrics"> </p>', '<p class="lyrics">-----------</p>');
       temp = temp.replace('<p class="lyrics">  </p>', '<p class="lyrics">-----------</p>');
       index++;
     }
    return temp;
  }







  getPrivateTab(): Observable<Tab[]> {

    return this.authHttp.get('api/tabs/private')
      .map((res) => res.json())
      .catch(this.handleError);
  }

  getMyPrivateTabs() {

    return this.authHttp.get('api/tabs/myPrivate' + '/?UserId=' + this.authService.userId)
      .map((res: Response) => res.json());

  }

  getMyPublicTabs() {

    return this.authHttp.get('api/tabs/myPublic' + '/?UserId=' + this.authService.userId)
      .map((res: Response) => res.json());

  }




  createTab(t) {
    let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    // console.log("Posting to db" + JSON.stringify(t));

    return this.authHttp.post("api/tabs", JSON.stringify(t), options).map((res) => res.json());

  }


  deleteTab(t) {
    // console.log("Deleting Tab" + JSON.stringify(t));
    return this.authHttp.delete("api/tabs" + '/?TabId=' + t._id + '&UserId=' + this.authService.userId).map((res: Response) => res.json());

  }


  setOpentab(t: Tab) {
    this.openTab = t;
    localStorage.setItem('opentab', JSON.stringify(t));
  }

  changeTab() {
    let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log("Putting to db" + JSON.stringify(this.openTab));

    return this.authHttp.put("api/tabs", JSON.stringify(this.openTab), options).map((res) => res.json());

  }

//   updateTab() {
// console.log("Getting Tab" + JSON.stringify(this.openTab));

//     this.http.get('api/tab?id='+this.openTab._id)
//       .map((res: Response) => res.json()).subscribe(
//       tab => { this.setOpentab(tab); }
//       );
//   }






  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure

    // console.log("Error with tab retrieval");

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

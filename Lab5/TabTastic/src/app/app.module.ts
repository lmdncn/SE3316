import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { HomepageComponent } from './homepage/homepage.component';
import { TabViewComponent } from './tab-view/tab-view.component';

import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomepageComponent },
  { path: 'TabView', component: TabViewComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    TabViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


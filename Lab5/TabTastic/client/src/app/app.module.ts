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
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import{ TabsService } from "./tabs.service";
import { AddTabComponent } from './add-tab/add-tab.component';


import { ReactiveFormsModule } from '@angular/forms';




const appRoutes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomepageComponent },
  { path: 'TabView', component: TabViewComponent },
  { path: 'SignIn', component: SignInComponent },
  { path: 'SignUp', component: SignUpComponent },
  { path:'AddTab', component: AddTabComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    TabViewComponent,
    SignUpComponent,
    SignInComponent,
    AddTabComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TabsService],
  bootstrap: [AppComponent],
})
export class AppModule { }


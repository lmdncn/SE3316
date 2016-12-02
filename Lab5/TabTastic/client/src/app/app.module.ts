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
import { TabsService } from "./services/tabs.service";
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AddTabComponent } from './add-tab/add-tab.component';

import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt';


import { ReactiveFormsModule } from '@angular/forms';
import { UserWelcomeComponent } from './user-welcome/user-welcome.component';
import { ChordListComponent } from './chord-list/chord-list.component';




const appRoutes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: HomepageComponent },
    { path: 'TabView', component: TabViewComponent },
    { path: 'AddTab', component: AddTabComponent, canActivate: [AuthGuardService] },
    { path: 'UserWelcome', component: UserWelcomeComponent, canActivate: [AuthGuardService] },
      { path: 'ChordList', component: ChordListComponent}
];


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomepageComponent,
        TabViewComponent,
        AddTabComponent,
        UserWelcomeComponent,
        ChordListComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AlertModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [TabsService, AuthHttp, provideAuth({
        headerName: 'Authorization',
        headerPrefix: 'bearer',
        tokenName: 'token',
        tokenGetter: (() => localStorage.getItem('id_token')),
        globalHeaders: [{ 'Content-Type': 'application/json' }],
        noJwtError: true
    }),
        AuthService, AuthGuardService
    ],
    bootstrap: [AppComponent],
})


export class AppModule { }


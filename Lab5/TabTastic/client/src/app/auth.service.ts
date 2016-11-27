import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt'
import { Router } from '@angular/router';

var Auth0Lock = require('auth0-lock').default;

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
    userId:any;
    nickname:any;

    lockLI = new Auth0Lock('yOHOPEsMPE4f5l5JbRFuMDOO188oxW9X', 'lmdncn.auth0.com', {
       
        languageDictionary: {
    title: "TabTastic"
  },

    theme: {
    logo: '../assets/img/tab.png',
    primaryColor: '#BF0B0D',
    
  },
  socialButtonStyle: 'small',
  allowSignUp: false


    });

    lockSU = new Auth0Lock('yOHOPEsMPE4f5l5JbRFuMDOO188oxW9X', 'lmdncn.auth0.com', {
       
languageDictionary: {
    title: "TabTastic"
  },


    theme: {
    logo: '../assets/img/tab.png',
    primaryColor: '#BF0B0D',
    
  },
  socialButtonStyle: 'small',
  allowLogin: false

    });

    constructor(private router: Router) {
        // Add callback for lock `authenticated` event
        this.lockSU.on('authenticated', (authResult: any) => {
            localStorage.setItem('id_token', authResult.idToken);

            this.lockSU.getProfile(authResult.idToken, (error: any, profile: any) => {
                if (error) {
                    console.log(error);
                }
                this.userId = profile.user_id;
                this.nickname = profile.nickname;
                localStorage.setItem('profile', JSON.stringify(profile));
            });

            this.lockSU.hide();
        });

         this.lockLI.on('authenticated', (authResult: any) => {
            localStorage.setItem('id_token', authResult.idToken);

            this.lockLI.getProfile(authResult.idToken, (error: any, profile: any) => {
                if (error) {
                    console.log(error);
                }
                this.userId = profile.user_id;
                this.nickname = profile.nickname;
                console.log (JSON.stringify(profile.user_id));
                localStorage.setItem('profile', JSON.stringify(profile));
            });

            this.lockLI.hide();
        });


        if(this.userId == null && this.loggedIn()){
            let temp = JSON.parse(localStorage.getItem('profile'));
            this.userId = temp.user_id;
            this.nickname = temp.nickname;
        }
    }

    login() {
        // Call the show method to display the widget.
        this.lockLI.show();
    };

    signUp() {
        // Call the show method to display the widget.
        this.lockSU.show();
    };


    authenticated() {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    };

    logout() {
        // To log out, just remove the token and profile
        // from local storage
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
        this.userId = null;
        this.nickname = null;

        // Send the user back to the public deals page after logout
        this.router.navigateByUrl('/Home');
    }

    loggedIn() {
        return tokenNotExpired();
    }


}







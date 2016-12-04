import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TabsService } from '../services/tabs.service';

@Component({
  selector: 'app-user-welcome',
  templateUrl: './user-welcome.component.html',
  styleUrls: ['./user-welcome.component.css']
})
export class UserWelcomeComponent implements OnInit {

  constructor(private authService:AuthService, private ts:TabsService) { }

  dmcas:any;

  ngOnInit() {

    this.ts.getDmcas() .subscribe(
        ds => { this.dmcas = ds; });

  }

}

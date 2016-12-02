import { Component, OnInit } from '@angular/core';
import { Chord } from '../models/chord';

@Component({
  selector: 'app-chord-list',
  templateUrl: './chord-list.component.html',
  styleUrls: ['./chord-list.component.css']
})
export class ChordListComponent implements OnInit {


  chords: Chord[];

  constructor() { }



  ngOnInit() {
  }


}

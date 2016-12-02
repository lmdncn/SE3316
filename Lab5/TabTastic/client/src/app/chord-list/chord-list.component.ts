import { Component, OnInit } from '@angular/core';
import { Chord } from '../models/chord';

@Component({
  selector: 'app-chord-list',
  templateUrl: './chord-list.component.html',
  styleUrls: ['./chord-list.component.css']
})
export class ChordListComponent implements OnInit {


  chords: Chord[] = new Array<Chord>();

  constructor() { }



  ngOnInit() {
    let s:string [] = ['C','D','Dm',"E",'Em','F',"G","A",'Am',"B",'Bb'];

    for (let i = 0 ; i<s.length ; i++){
    this.chords.push(new Chord(s[i],'../../assets/chords/'+s[i]+'.jpg',s[i].slice(0,1))); 
  
    }
  }



}

import { Component, OnInit } from '@angular/core';
import {CODALITES} from '../mock-codalite';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   
   lists=CODALITES;
   
    constructor() { }

  ngOnInit() {
  }

  

}

import { Component, OnInit } from '@angular/core';
import {$} from 'protractor';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  title = 'Thesis service';
  ngOnInit() {
  }
}

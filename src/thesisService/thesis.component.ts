import { Component, OnInit } from '@angular/core';
import { Thesis } from './thesis';

@Component({
  selector: 'app-thesis',
  templateUrl: './thesis.component.html',
  styleUrls: ['./thesis.component.css']
})
export class ThesisComponent implements OnInit {
  thesis: Thesis = {
    topic: 'Engineering Thesis',
    author: 'Test Author',
    link: 'http://google.com'
  };

  constructor() { }

  ngOnInit() {
    const td = document.createElement('tr');
    td.setAttribute('th', 'test');
    const table = document.getElementById('thesisTable');
    table.appendChild(td);
  }

}

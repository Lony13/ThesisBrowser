import {Component, OnInit} from '@angular/core';
import {ServerInfo} from '../model/serverInfo';

@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.css']
})
export class InfoWindowComponent implements OnInit {

  messages: ServerInfo[];

  constructor() { }

  ngOnInit() {
    this.messages = new Array();
    this.messages.push(new ServerInfo('Theses for Piotr Faliszewski downloaded. Downloaded 24 new theses and updated 67.',
      new Date(2018, 11, 2, 14, 37, 22)));
    this.messages.push(new ServerInfo('LDA finished word for 12 theses. Time 17 min 42 seconds.',
      new Date(2018, 11, 1, 11, 51, 32)));
    this.messages.push(new ServerInfo('Updated quoatation number for theses',
      new Date(2018, 10, 27, 19, 41, 22)));
    this.messages.push(new ServerInfo('Download thesis with title How to program with python for author Python Master',
      new Date(2018, 10, 25, 8, 17, 9)));
  }

}

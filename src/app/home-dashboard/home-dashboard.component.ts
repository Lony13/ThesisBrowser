import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {

  title = 'Thesis browser';

  constructor() {
  }

  ngOnInit() {
    this.title = 'Thesis browser';
  }
}

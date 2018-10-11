import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {

  title = 'Thesis browser';

  constructor(private router: Router) { }

  ngOnInit() {
    this.title = 'Thesis browser';
  }

  loginPage(): void {
    console.log('redirect');
    this.router.navigate(['login']);
  }
}

import {Component, OnInit} from '@angular/core';
import {AdminDashboardService} from './admin-dashboard.service';
import {TokenStorage} from '../core/token.storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  author: string;
  title: string;

  constructor(private adminDashboardService: AdminDashboardService,
              private token: TokenStorage,
              private router: Router) { }

  ngOnInit() {
  }

  runDownloader() {
    this.adminDashboardService.postDownload(this.author, this.title);
  }

  refreshTopics() {
    this.adminDashboardService.refreshTopics();
  }

  logout() {
    this.token.signOut();
    this.router.navigate(['login']);
  }
}

import {Component, OnInit} from '@angular/core';
import {AdminDashboardService} from './admin-dashboard.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  author: string;
  title: string;

  constructor(private adminDashboardService: AdminDashboardService) { }

  ngOnInit() {
  }

  runDownloader() {
    this.adminDashboardService.postDownload(this.author, this.title);
  }

  refreshTopics() {

  }
}

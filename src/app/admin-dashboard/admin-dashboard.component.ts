import {Component, OnInit} from '@angular/core';
import {AdminDashboardService} from './admin-dashboard.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  authorName: string;
  title: string;

  constructor(private adminDashboardService: AdminDashboardService) {
  }

  ngOnInit() {
  }

  runDownloader() {
    this.adminDashboardService.postDownload(this.authorName, this.title);
  }

  refreshTopics() {
    this.adminDashboardService.refreshTopics();
  }
}

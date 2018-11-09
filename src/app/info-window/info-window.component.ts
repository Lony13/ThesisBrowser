import {Component, OnInit} from '@angular/core';
import {ServerInfo} from '../model/serverInfo';
import {AdminDashboardService} from '../admin-dashboard/admin-dashboard.service';

@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.css']
})
export class InfoWindowComponent implements OnInit {

  messages: ServerInfo[];

  constructor(private adminService: AdminDashboardService) { }

  ngOnInit() {
    this.adminService.loadServerInfos(0, 5)
      .subscribe(value => {
        this.messages = value;
        this.adminService.setServerInfo(this.messages);
        console.log(this.messages);
      });
  }
}

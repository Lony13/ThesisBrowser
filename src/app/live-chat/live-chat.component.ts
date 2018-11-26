import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.css']
})
export class LiveChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleChat() {
    const display = document.getElementById('livechat').style.display;
    console.log(display);
    if (display === 'block') {
      document.getElementById('livechat').style.display = 'none';
    } else {
      document.getElementById('livechat').style.display = 'block';
    }
  }
}

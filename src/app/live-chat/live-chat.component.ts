import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.css']
})
export class LiveChatComponent implements OnInit {

  constructor() { }

  content: string;
  nickname: string;

  ngOnInit() {
    this.content = '';
    this.nickname = '';
  }

  sendMessage() {
    document.getElementById('send-info').style.display = 'inline';
  }

  toggleChat() {
    const display = document.getElementById('livechat').style.display;
    document.getElementById('send-info').style.display = 'none';
    if (display === 'block') {
      document.getElementById('livechat').style.display = 'none';
    } else {
      document.getElementById('livechat').style.display = 'block';
    }
  }
}

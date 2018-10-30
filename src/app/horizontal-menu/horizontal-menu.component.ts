import {Component, OnInit} from '@angular/core';
import {TokenStorage} from '../core/token.storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.css']
})
export class HorizontalMenuComponent implements OnInit {

  constructor(private token: TokenStorage,
              private router: Router) { }

  public isSignIn;

  ngOnInit() {
    this.isSignIn = !!this.token.getToken();
  }

  logout() {
    this.token.signOut();
    this.router.navigate(['home']);
  }
}

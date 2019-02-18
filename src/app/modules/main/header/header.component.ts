import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any;
  jwtHelper = new JwtHelperService;
  constructor() {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.user = this.jwtHelper.decodeToken(token).unique_name;
  }

  logout() {
    localStorage.removeItem('token');
  }

}

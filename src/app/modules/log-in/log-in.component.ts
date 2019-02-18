import { Component, OnInit } from '@angular/core';
import { LogInService } from './log-in.service';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/shared/services/alertify.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  user: any = { };
  signIn = false;
  forgotPassword = false;
  confirmationName = 'Log in';
  statusMessage;
  constructor(private loginService: LogInService, private router: Router, private alertify: AlertifyService) { }

  ngOnInit() {}

  submitMethod() {
    if (!this.forgotPassword && !this.signIn) {
      this.logIn();
    } else if (this.signIn) {
      this.register();
    } else if (this.forgotPassword) {
      this.loginService.recoverPassword(this.user);
    }
  }

  trim(model) {
    return model.replace(/\s/g, '');
  }

  logIn() {
    this.loginService.logIn(this.user).subscribe(data => {
      this.router.navigate(['/dashboard']);
    }, error => {
      this.statusMessage = error.error;
    });
  }

  register() {
    this.loginService.signIn(this.user).subscribe(data => {
      this.alertify.success('Registration successefully');
    }, error => {
      this.statusMessage = error.error;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { LogInService } from './log-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  user = {
    password :'',
    name : ''
  } as User;
  signIn = false;
  forgotPassword = false;
  confirmationName = "Log in";
  statusMessage;
  constructor(private loginService: LogInService,private router:Router) { }

  ngOnInit() {}

  submitMethod()
  {
    if(!this.forgotPassword && !this.signIn)
      this.loginService.logIn(this.user).subscribe(data => {
        this.user = data;
        this.router.navigate(['/dashboard'])
      });
    else if(this.signIn)
    {
      this.loginService.signIn(this.user).subscribe(data => 
      {
        this.statusMessage = data;
      }, error => 
      {
        this.statusMessage = error;
      })
    }
    else if(this.forgotPassword)
    {
      this.loginService.recoverPassword(this.user);
    }
  }

  trim(model)
  {
    return model.replace(/\s/g,'')
  }
  checkConfirmation()
  {
    
  }

}

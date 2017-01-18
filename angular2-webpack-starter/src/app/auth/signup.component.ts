import { Component } from '@angular/core';
import { IUser } from './user';
import { LoginService } from '../services/auth-services';

@Component({
    templateUrl: './signup.component.html',
    providers: [ LoginService ]
})
export class SignupComponent {
  login: string;
  password1: string;
  password2: string;

  user: IUser = {
    login: '',
    password: '',
  };


  constructor (private loginService: LoginService) {
  }

  onSave(): void {
    if (this.password1 === this.password2) {
      this.user.login = this.login;
      this.user.password = this.password1;
      console.log(this.user);
      debugger;
      this.loginService.makeLogin(this.user).subscribe(res => {debugger;});
    } else {
      console.log('fuck you');
    }
  }
}


import { Component } from '@angular/core';
import { IUser } from './user';

@Component({
    templateUrl: './signup.component.html'
})
export class SignupComponent {
  login: string;
  password1: string;
  password2: string;

  user: IUser = {
    login: '',
    password: '',
  };


  constructor () {
  }

  onSave(): void {
    if (this.password1 === this.password2) {
      this.user.login = this.login;
      this.user.password = this.password1;
      console.log(this.user);
    } else {
      console.log('fuck you');
    }
  }
}


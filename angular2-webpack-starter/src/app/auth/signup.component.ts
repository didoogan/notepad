import { Component } from '@angular/core'

@Component({
    templateUrl: './signup.component.html'
})
export class SignupComponent {
  user: User = {
    'login' : '',
    'password1' : '',
    'password2' : ''
  };

  constructor () {
  }

  onSave(): void {
    console.log(this.user);
  }
}

 interface User {
   login: string;
   password1: string;
   password2: string;
 }

import { Component } from '@angular/core'
 
@Component({
    templateUrl: './signup.component.html'
})
export class SignupComponent {
    login: string;
    password1: string;
    password2: string;

    onSave(): void {
        console.log(this.login);
        console.log(this.password1);
        console.log(this.password2);
    }
}
import { Component } from '@angular/core';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {
  username: string;
  password: string;

  onSubmit(): void {
    alert('submitted!');
  }
}
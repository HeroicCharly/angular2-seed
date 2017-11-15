import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthFormComponent } from './components/auth-form/auth-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    AuthFormComponent,
  ],
  exports: [
    AuthFormComponent,
  ]
})
export class AuthenticationModule { }

import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}

  loginForm = this.fb.group({
    email: [''],
    password: [''],
  });

  onSubmit() {
    console.log(this.loginForm.value);
  }
}

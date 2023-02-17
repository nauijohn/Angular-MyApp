import { Observable } from 'rxjs';

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (!form.valid) return;
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLoginMode) authObs = this.authService.login(email, password);
    else authObs = this.authService.signup(email, password);

    authObs.subscribe({
      next: (responseData) => {
        console.log(responseData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      error: (error) => {
        console.log(error);
        this.error = error;
        this.isLoading = false;
      },
    });

    //   .subscribe(
    //   (responseData) => {
    //     console.log(responseData);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    form.reset();
  }
}

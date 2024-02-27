import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'src/app/core/services/toastr.service';
import { ILogin } from '../../models/login.interface';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  sentForm = false;
  hidePassword = true;

  textError = '';

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly toastrService: ToastrService,
    private readonly tokenService: TokenService,
    private readonly router: Router
  ) {}

  signIn() {
    this.sentForm = true;
    if (this.form.invalid) {
      return;
    }
    this.textError = ''
    this.authService.login(this.form.value as ILogin).subscribe({
      next: (res) => {
        this.tokenService.setToken(res.data.access_token);
        this.router.navigate([`/company`]);
      },
      error: (err) => {
        this.textError = err.error.message
      },
    });
  }
}

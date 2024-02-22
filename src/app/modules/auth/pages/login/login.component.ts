import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'src/app/core/services/toastr.service';
import { ILogin } from '../../models/login.interface';

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

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly toastrService: ToastrService,
    private readonly router: Router
  ) {}

  signIn() {
    this.sentForm = true;
    if (this.form.invalid) {
      return;
    }

    this.authService.login(this.form.value as ILogin).subscribe({
      next: (res) => {},
      error: (err) => {
        this.toastrService.error(err.error.message);
      },
    });
  }
}

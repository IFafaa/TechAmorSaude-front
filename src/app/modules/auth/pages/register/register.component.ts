import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { IRegister } from '../../models/register.interface';
import { Router } from '@angular/router';
import { ToastrService } from 'src/app/core/services/toastr.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]],
  });
  sentForm = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly toastrService: ToastrService,
    private readonly router: Router
  ) {}

  validatePasswordMatch() {
    const password = this.form.controls.password;
    const confirmPassword = this.form.controls.confirmPassword;
    if (
      password &&
      confirmPassword &&
      password.value !== confirmPassword.value
    ) {
      confirmPassword.setErrors({ passwordMatch: true });
      return;
    }
    if (!confirmPassword?.value) {
      confirmPassword?.setErrors({ required: true });
      return;
    }
    confirmPassword.setErrors(null);
  }

  register() {
    this.sentForm = true;
    if (this.form.invalid) {
      return;
    }

    const register = this.form.value;
    delete register.confirmPassword;

    this.authService.register(register as IRegister).subscribe({
      next: (res) => {
        this.toastrService.success(res.message);
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        console.log(err);

        this.toastrService.error(err);
      },
    });
  }
}

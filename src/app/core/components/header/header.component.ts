import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { NavigationEnd, Router } from '@angular/router';
import { ConfirmDialogService } from '../../services/confirm-dialog.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { ToastrService } from '../../services/toastr.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatButtonModule],
})
export class HeaderComponent {
  routesToHidden = ['/', '/auth/register', '/auth/login'];
  url!: string;
  hasLogged!: boolean;
  constructor(
    private readonly router: Router,
    private readonly tokenService: TokenService,
    private readonly toastrService: ToastrService,
    private readonly authService: AuthService,
    private readonly confirmDialogService: ConfirmDialogService
  ) {
    this.url = router.url;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.hasLogged = tokenService.getToken() !== null;
        this.url = event.url;
      }
    });
  }

  logOut() {
    this.tokenService.removeToken();
    this.router.navigate(['/']);
  }

  deleteUser() {
    const titleDialog = 'Deletar Conta';
    const descDialog = 'Você realmente deseja deletar a sua conta?';
    this.confirmDialogService.confirm(titleDialog, descDialog, () => {
      // this.authService.deleteUser().subscribe({
      //   next: () => {
      //     this.tokenService.removeToken();
      //     this.router.navigate(['/']);
      //     this.toastrService.success('Conta deletada com sucesso!');
      //   },
      // });
    });
  }
}

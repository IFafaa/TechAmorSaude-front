import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent {
  constructor(private readonly router: Router) {}
  createCompany() {
    this.router.navigate(['/company/create/0']);
  }
}

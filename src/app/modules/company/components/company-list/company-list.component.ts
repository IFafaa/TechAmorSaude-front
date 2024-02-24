import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { ICompany } from '../../models/company.interface';
import { Router } from '@angular/router';
import { ENUM_CRUD_TYPE } from 'src/app/core/enums/crud-type.enum';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {
  companies: ICompany[] = [];
  pageIndex = 0;

  constructor(
    private readonly companyService: CompanyService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((res) => {
      this.companies = res as any;
    });
  }
  viewCompany(company_id: number) {
    this.router.navigate([`company/${ENUM_CRUD_TYPE.view}/${company_id}`]);
  }
  editCompany(company_id: number) {
    this.router.navigate([`company/${ENUM_CRUD_TYPE.edit}/${company_id}`]);
  }
}

import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { ICompany } from '../../models/company.interface';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {
  companies: ICompany[] = [];
  pageIndex = 0;

  constructor(private readonly companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((res) => {
      this.companies = res as any;
    });
  }
  viewCompany(company_id: number) {}
  editCompany(company_id: number) {}
  removeCompany(company_id: number) {}
}

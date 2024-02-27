import { ENUM_LIST_STATUS } from './../../../../core/enums/list-status.enum';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { ICompany } from '../../models/company.interface';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ENUM_CRUD_TYPE } from 'src/app/core/enums/crud-type.enum';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent {
  companies: ICompany[] = [];
  ENUM_LIST_STATUS = ENUM_LIST_STATUS;
  companiesListStatus: ENUM_LIST_STATUS = ENUM_LIST_STATUS.NOT_FOUND;
  pageIndex = 0;

  filter: string = '';

  constructor(
    private readonly companyService: CompanyService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.route.queryParams.subscribe((params) => {
          this.filter = params['filter'];
          this.getCompanies(params['filter']);
        });
      }
    });
  }

  adjustParams(filter?: string) {
    this.router.navigate(['/company'], { queryParams: { filter: filter } });
  }

  getCompanies(filter?: string) {
    const _filter = filter
      ? { fantasy_name: filter, company_name: filter }
      : undefined;
    this.companyService.getCompanies(_filter).subscribe({
      next: (res) => {
        this.companiesListStatus = ENUM_LIST_STATUS.IDLE;
        this.companies = res;
        if (!this.companies.length)
          this.companiesListStatus = ENUM_LIST_STATUS.NOT_FOUND;
      },
      error: (err) => {
        this.companiesListStatus = ENUM_LIST_STATUS.ERROR;
      },
    });
  }

  viewCompany(company_id: number) {
    this.router.navigate([`company/${ENUM_CRUD_TYPE.view}/${company_id}`]);
  }
  editCompany(company_id: number) {
    this.router.navigate([`company/${ENUM_CRUD_TYPE.edit}/${company_id}`]);
  }
}

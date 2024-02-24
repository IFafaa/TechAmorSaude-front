import { Component, OnInit } from '@angular/core';
import { ENUM_CRUD_TYPE } from 'src/app/core/enums/crud-type.enum';
import { ICompany } from '../../models/company.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { ConfirmDialogService } from '../../../../core/services/confirm-dialog.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-company-action',
  templateUrl: './company-action.component.html',
  styleUrls: ['./company-action.component.scss'],
})
export class CompanyActionComponent implements OnInit {
  ENUM_CRUD_TYPE = ENUM_CRUD_TYPE;
  crudType!: ENUM_CRUD_TYPE;
  id!: number;
  company!: ICompany;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly companyService: CompanyService,
    private readonly confirmDialogService: ConfirmDialogService,
    private readonly _snackBar: MatSnackBar
  ) {
    this.getParams();
  }

  ngOnInit(): void {}

  getParams() {
    this.route.params.subscribe((params) => {
      this.crudType = params['type'];
      this.id = params['id'] || 0;

      const isCrudTypeValid = Object.values(ENUM_CRUD_TYPE).includes(
        this.crudType
      );
      const isCreateOperation = this.crudType === ENUM_CRUD_TYPE.create;
      const hasId = !!this.id;
      if (isCrudTypeValid) {
        if (isCreateOperation) {
          return;
        }
        if (hasId) {
          this.getCompany();
          return;
        }
      }
      this.router.navigate(['not-found']);
    });
  }

  getCompany() {
    this.companyService.getCompany(this.id).subscribe({
      next: (res) => {
        this.company = res;
        if (this.id && !this.company) {
          this.router.navigate(['not-found']);
        }
      },
    });
  }

  sendForm(company: Omit<ICompany, 'id'>) {
    if (this.crudType === this.ENUM_CRUD_TYPE.create) {
      this.createCompany(company);
    }
    if (this.crudType === this.ENUM_CRUD_TYPE.edit) {
      this.editCompany(company as ICompany);
    }
  }

  createCompany(company: Omit<ICompany, 'id'>) {
    this.companyService.createCompany(company).subscribe({
      next: (res) => {
        this._snackBar.open('Entidade criada com sucesso!', 'Fechar');
        this.resetParams();
        this.router.navigate([`company/${ENUM_CRUD_TYPE.view}/${res.data.id}`]);
      },
    });
  }

  editCompany(company: Omit<ICompany, 'id'>) {
    this.companyService.editCompany(company, this.id).subscribe({
      next: (res) => {
        this._snackBar.open('Entidade editada com sucesso!', 'Fechar');
        this.resetParams();
        this.router.navigate([`company/${ENUM_CRUD_TYPE.view}/${res.data.id}`]);
      },
    });
  }

  goToEditCompany(id: number) {
    this.resetParams();
    this.router.navigate([`company/${ENUM_CRUD_TYPE.edit}/${id}`]);
  }

  removeCompany() {
    this.confirmDialogService.confirm(
      'Excluir entidade',
      'Deseja realmente excluir essa entidade?',
      () => {
        this.companyService.removeCompany(this.company.id).subscribe({
          next: (res) => {
            this.router.navigate(['/company']);
          },
        });
      }
    );
  }

  resetParams() {
    this.id = undefined as any;
    this.company = undefined as any;
    this.crudType = undefined as any;
  }
}

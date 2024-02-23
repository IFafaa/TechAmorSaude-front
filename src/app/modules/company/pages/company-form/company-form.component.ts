import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ENUM_CRUD_TYPE } from 'src/app/core/enums/crud-type.enum';
import { IMedicalSpecialty } from '../../models/medical-specialty.interface';
import { MedicalSpecialtyService } from '../../services/medical-specialty.service';
import { IRegion } from '../../models/region.interface';
import { RegionService } from '../../services/region.service';
import { FormBuilder, Validators } from '@angular/forms';
import { cpfCnpjValidator } from 'src/app/core/validators/cpf-cnpj.validator';
import { minDateValidator } from 'src/app/core/validators/min-date.validator';
import { ICompany } from '../../models/company.interface';
import { CompanyService } from '../../services/company.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss'],
})
export class CompanyFormComponent implements OnInit {
  ENUM_CRUD_TYPE = ENUM_CRUD_TYPE;
  crudType!: ENUM_CRUD_TYPE;
  id!: number;
  company!: ICompany;

  medical_specialities: IMedicalSpecialty[] = [];
  regions: IRegion[] = [];

  form = this.fb.group({
    company_name: ['', [Validators.required, Validators.minLength(10)]],
    fantasy_name: ['', [Validators.required, Validators.minLength(10)]],
    cnpj: ['', [Validators.required, cpfCnpjValidator()]],
    inauguration_date: ['', [Validators.required, minDateValidator()]],
    active: [false],
    region: [null, [Validators.required]],
    medical_specialties: [[], Validators.required],
  });
  sentForm = false;

  today = new Date();

  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly medicalSpecialtyService: MedicalSpecialtyService,
    private readonly regionService: RegionService,
    private readonly companyService: CompanyService
  ) {
    this.getParams();
  }

  ngOnInit(): void {
    this.getMedicalSpecialty();
    this.getRegions();
  }

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

  getMedicalSpecialty() {
    this.medicalSpecialtyService
      .getMedicalSpecialties()
      .subscribe({ next: (res) => (this.medical_specialities = res) });
  }

  getRegions() {
    this.regionService
      .getRegions()
      .subscribe({ next: (res) => (this.regions = res) });
  }

  sendForm() {
    this.sentForm = true;
    if (this.form.invalid) return;

    console.log(this.form.value);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ENUM_CRUD_TYPE } from 'src/app/core/enums/crud-type.enum';
import { IMedicalSpecialty } from '../../models/medical-specialty.interface';
import { MedicalSpecialtyService } from '../../services/medical-specialty.service';
import { IRegion } from '../../models/region.interface';
import { RegionService } from '../../services/region.service';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';
import { cpfCnpjValidator } from 'src/app/core/validators/cpf-cnpj.validator';
import { minDateValidator } from 'src/app/core/validators/min-date.validator';
import { ICompany } from '../../models/company.interface';
import { CompanyForm } from './company.form';
import { MatDialog } from '@angular/material/dialog';
import { CompanyListSpecialtyComponent } from '../company-list-specialty/company-list-specialty.component';
import { ErrorService } from 'src/app/core/services/error.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss'],
})
export class CompanyFormComponent implements OnInit {
  ENUM_CRUD_TYPE = ENUM_CRUD_TYPE;
  @Input() crudType!: ENUM_CRUD_TYPE;
  @Input() company!: ICompany;
  @Output() sendFormCallback = new EventEmitter();

  isCreateMode = false;
  isEditMode = false;
  isViewMode = false;

  medical_specialities: IMedicalSpecialty[] = [];
  regions: IRegion[] = [];

  form!: CompanyForm;
  sentForm = false;

  today = new Date();

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly medicalSpecialtyService: MedicalSpecialtyService,
    private readonly regionService: RegionService,
    private readonly matDialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.setCrudTypeValues();
    this.createForm();
    this.getMedicalSpecialty();
    this.getRegions();
    if (this.company) this.setValuesForm();
  }

  setCrudTypeValues() {
    this.isCreateMode = this.crudType == ENUM_CRUD_TYPE.create;
    this.isEditMode = this.crudType == ENUM_CRUD_TYPE.edit;
    this.isViewMode = this.crudType == ENUM_CRUD_TYPE.view;
  }

  createForm() {
    this.form = this.fb.group({
      company_name: [
        '',
        !this.isViewMode ? [Validators.required, Validators.minLength(10)] : [],
      ],
      fantasy_name: [
        '',
        !this.isViewMode ? [Validators.required, Validators.minLength(10)] : [],
      ],
      cnpj: [
        '',
        !this.isViewMode ? [Validators.required, cpfCnpjValidator()] : [],
      ],
      inauguration_date: [
        new Date(),
        !this.isViewMode ? [Validators.required, minDateValidator()] : [],
      ],
      active: [false],
      region: [null, !this.isViewMode ? [Validators.required] : []],
      medical_specialties: [
        [] as number[],
        !this.isViewMode ? [Validators.required] : [],
      ],
    }) as CompanyForm;
    this.form.updateValueAndValidity();
  }

  getMedicalSpecialty(): void {
    this.medicalSpecialtyService
      .getMedicalSpecialties()
      .subscribe({ next: (res) => (this.medical_specialities = res) });
  }

  getRegions(): void {
    this.regionService
      .getRegions()
      .subscribe({ next: (res) => (this.regions = res) });
  }

  viewSpecialties() {
    this.matDialog.open(CompanyListSpecialtyComponent, {
      height: '50vh',
      minWidth: '300px',
      data: this.company.medical_specialties,
    });
  }

  setValuesForm(): void {
    this.form.setValue({
      active: this.company.active,
      cnpj: this.company.cnpj,
      company_name: this.company.company_name,
      fantasy_name: this.company.fantasy_name,
      inauguration_date: this.company.inauguration_date,
      medical_specialties: this.company.medical_specialties.map(
        (specialty) => specialty.id
      ),
      region: this.company.region.id,
    });
  }

  cancel() {
    this.router.navigate(['/company/']);
  }

  sendForm(): void {
    this.sentForm = true;
    if (this.form.invalid) return;

    this.sendFormCallback.emit(this.form.value);
  }
}

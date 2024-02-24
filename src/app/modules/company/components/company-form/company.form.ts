import { FormGroup, FormControl } from "@angular/forms";

export type CompanyForm = FormGroup<{
  company_name: FormControl<string>;
  fantasy_name: FormControl<string>;
  cnpj: FormControl<string>;
  inauguration_date: FormControl<Date>;
  active: FormControl<boolean>;
  region: FormControl<number>;
  medical_specialties: FormControl<number[]>;
}>;

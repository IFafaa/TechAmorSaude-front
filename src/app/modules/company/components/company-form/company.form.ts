import { FormGroup, FormControl } from "@angular/forms";

export type CompanyForm = FormGroup<{
  company_name: FormControl<string | null>;
  fantasy_name: FormControl<string | null>;
  cnpj: FormControl<string | null>;
  inauguration_date: FormControl<Date | null>;
  active: FormControl<boolean>;
  region: FormControl<number | null>;
  medical_specialties: FormControl<number[]>;
}>;

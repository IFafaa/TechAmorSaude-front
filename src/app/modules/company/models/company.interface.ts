export interface Company {
  id: number;
  company_name: string;
  fantasy_name: string;
  cnpj: string;
  inauguration_date: Date;
  active: boolean;
  created_at: Date;
  region: {
    id: number;
    label: string;
  };
  medical_specialties: {
    id: number;
    label: string;
  }[];
}

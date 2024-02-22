import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor() {}

  getCompanies() {
    return of([
      {
        id: 1,
        company_name: 'Nome da Empresa',
        fantasy_name: 'Nome Fantasia',
        cnpj: '12345678901234',
        inauguration_date: '2023-01-01T00:00:00.000Z',
        active: true,
        created_at: '2024-02-21T00:00:00.000Z',
        region: {
          id: 12,
          label: 'SP1',
        },
        medical_specialties: [],
      },
      {
        id: 2,
        company_name: 'Nome da Empresa',
        fantasy_name: 'Nome Fantasia',
        cnpj: '12345678901234',
        inauguration_date: '2023-01-01T00:00:00.000Z',
        active: true,
        created_at: '2024-02-21T00:00:00.000Z',
        region: {
          id: 12,
          label: 'SP1',
        },
        medical_specialties: [],
      },
      {
        id: 3,
        company_name: 'Nome da Empresa',
        fantasy_name: 'Nome Fantasia',
        cnpj: '12345678901234',
        inauguration_date: '2023-01-01T00:00:00.000Z',
        active: true,
        created_at: '2024-02-21T00:00:00.000Z',
        region: {
          id: 13,
          label: 'NE1',
        },
        medical_specialties: [],
      },
      {
        id: 4,
        company_name: 'Nome da Empresa',
        fantasy_name: 'Nome Fantasia',
        cnpj: '12345678901234',
        inauguration_date: '2023-01-01T00:00:00.000Z',
        active: true,
        created_at: '2024-02-21T00:00:00.000Z',
        region: {
          id: 13,
          label: 'NE1',
        },
        medical_specialties: [],
      },
      {
        id: 9,
        company_name: 'Nome da Empresa',
        fantasy_name: 'Nome Fantasia',
        cnpj: '12345678901234',
        inauguration_date: '2023-01-01T00:00:00.000Z',
        active: true,
        created_at: '2024-02-21T00:00:00.000Z',
        region: {
          id: 1,
          label: 'Alto tietê',
        },
        medical_specialties: [],
      },
      {
        id: 13,
        company_name: 'Nome da Empresa',
        fantasy_name: 'Nome Fantasia',
        cnpj: '12345678901234',
        inauguration_date: '2023-01-01T00:00:00.000Z',
        active: true,
        created_at: '2024-02-21T00:00:00.000Z',
        region: {
          id: 1,
          label: 'Alto tietê',
        },
        medical_specialties: [],
      },
      {
        id: 16,
        company_name: 'Nome da Empresa',
        fantasy_name: 'Nome Fantasia',
        cnpj: '12345678901234',
        inauguration_date: '2023-01-01T00:00:00.000Z',
        active: true,
        created_at: '2024-02-21T00:00:00.000Z',
        region: {
          id: 1,
          label: 'Alto tietê',
        },
        medical_specialties: [],
      },
      {
        id: 17,
        company_name: 'Nome da Empresa',
        fantasy_name: 'Nome Fantasia',
        cnpj: '12345678901234',
        inauguration_date: '2023-01-01T00:00:00.000Z',
        active: true,
        created_at: '2024-02-21T00:00:00.000Z',
        region: {
          id: 1,
          label: 'Alto tietê',
        },
        medical_specialties: [],
      },
      {
        id: 18,
        company_name: 'Nome da Empresa',
        fantasy_name: 'Nome Fantasia',
        cnpj: '12345678901234',
        inauguration_date: '2023-01-01T00:00:00.000Z',
        active: true,
        created_at: '2024-02-21T00:00:00.000Z',
        region: {
          id: 1,
          label: 'Alto tietê',
        },
        medical_specialties: [
          {
            id: 1,
            label: 'teste1',
          },
        ],
      },
      {
        id: 19,
        company_name: 'Nome da Empresa',
        fantasy_name: 'Nome Fantasia',
        cnpj: '12345678901234',
        inauguration_date: '2023-01-01T00:00:00.000Z',
        active: true,
        created_at: '2024-02-21T00:00:00.000Z',
        region: {
          id: 1,
          label: 'Alto tietê',
        },
        medical_specialties: [
          {
            id: 1,
            label: 'teste1',
          },
          {
            id: 2,
            label: 'teste2',
          },
        ],
      },
      {
        id: 20,
        company_name: 'Nome da Empresa',
        fantasy_name: 'Nome Fantasia',
        cnpj: '12345678901234',
        inauguration_date: '2023-01-01T00:00:00.000Z',
        active: true,
        created_at: '2024-02-21T00:00:00.000Z',
        region: {
          id: 1,
          label: 'Alto tietê',
        },
        medical_specialties: [
          {
            id: 1,
            label: 'teste1',
          },
          {
            id: 2,
            label: 'teste2',
          },
          {
            id: 3,
            label: 'teste3',
          },
        ],
      },
      {
        id: 21,
        company_name: 'Nome da Empresa',
        fantasy_name: 'Nome Fantasia',
        cnpj: '12345678901234',
        inauguration_date: '2023-01-01T00:00:00.000Z',
        active: true,
        created_at: '2024-02-21T00:00:00.000Z',
        region: {
          id: 1,
          label: 'Alto tietê',
        },
        medical_specialties: [
          {
            id: 1,
            label: 'teste1',
          },
          {
            id: 2,
            label: 'teste2',
          },
          {
            id: 3,
            label: 'teste3',
          },
        ],
      },
      {
        id: 24,
        company_name: 'Nome da Empresa',
        fantasy_name: 'Nome Fantasia',
        cnpj: '12345678901234',
        inauguration_date: '2023-01-01T00:00:00.000Z',
        active: true,
        created_at: '2024-02-21T00:00:00.000Z',
        region: {
          id: 1,
          label: 'Alto tietê',
        },
        medical_specialties: [
          {
            id: 1,
            label: 'teste1',
          },
          {
            id: 2,
            label: 'teste2',
          },
          {
            id: 3,
            label: 'teste3',
          },
        ],
      },
      {
        id: 25,
        company_name: 'Nome da Empresa',
        fantasy_name: 'Nome Fantasia',
        cnpj: '12345678901234',
        inauguration_date: '2023-01-01T00:00:00.000Z',
        active: true,
        created_at: '2024-02-21T00:00:00.000Z',
        region: {
          id: 1,
          label: 'Alto tietê',
        },
        medical_specialties: [],
      },
      {
        id: 26,
        company_name: 'Nome da Empresa',
        fantasy_name: 'Nome Fantasia',
        cnpj: '12345678901234',
        inauguration_date: '2023-01-01T00:00:00.000Z',
        active: true,
        created_at: '2024-02-21T00:00:00.000Z',
        region: {
          id: 1,
          label: 'Alto tietê',
        },
        medical_specialties: [],
      },
      {
        id: 27,
        company_name: 'Nome da Empresa',
        fantasy_name: 'Nome Fantasia',
        cnpj: '12345678901234',
        inauguration_date: '2023-01-01T00:00:00.000Z',
        active: true,
        created_at: '2024-02-21T00:00:00.000Z',
        region: {
          id: 1,
          label: 'Alto tietê',
        },
        medical_specialties: [],
      },
      {
        id: 28,
        company_name: 'Nome da Empresa',
        fantasy_name: 'Nome Fantasia',
        cnpj: '12345678901234',
        inauguration_date: '2023-01-01T00:00:00.000Z',
        active: true,
        created_at: '2024-02-21T00:00:00.000Z',
        region: {
          id: 1,
          label: 'Alto tietê',
        },
        medical_specialties: [],
      },
      {
        id: 29,
        company_name: 'testeeeeeeeeee ',
        fantasy_name: 'Nome Fantasia',
        cnpj: '12345678901234',
        inauguration_date: '2023-01-01T00:00:00.000Z',
        active: true,
        created_at: '2024-02-22T04:25:43.000Z',
        region: {
          id: 1,
          label: 'Alto tietê',
        },
        medical_specialties: [
          {
            id: 1,
            label: 'teste1',
          },
          {
            id: 2,
            label: 'teste2',
          },
          {
            id: 3,
            label: 'teste3',
          },
        ],
      },
      {
        id: 30,
        company_name: 'testeeeeeeeeee ',
        fantasy_name: 'Nome Fantasia',
        cnpj: '12345678901234',
        inauguration_date: '2023-01-01T00:00:00.000Z',
        active: true,
        created_at: '2024-02-22T04:26:25.000Z',
        region: {
          id: 1,
          label: 'Alto tietê',
        },
        medical_specialties: [
          {
            id: 1,
            label: 'teste1',
          },
          {
            id: 2,
            label: 'teste2',
          },
          {
            id: 3,
            label: 'teste3',
          },
        ],
      },
      {
        id: 31,
        company_name: 'testeeeeeeeeee ',
        fantasy_name: 'Nome Fantasia',
        cnpj: '12345678901234',
        inauguration_date: '2023-01-01T00:00:00.000Z',
        active: true,
        created_at: '2024-02-22T04:26:47.000Z',
        region: {
          id: 1,
          label: 'Alto tietê',
        },
        medical_specialties: [
          {
            id: 1,
            label: 'teste1',
          },
          {
            id: 2,
            label: 'teste2',
          },
          {
            id: 3,
            label: 'teste3',
          },
        ],
      },
      {
        id: 33,
        company_name: 'aaaaaaaaaaaaaaaaaaaa ',
        fantasy_name: 'Nome Fantasia',
        cnpj: '12345678901234',
        inauguration_date: '2023-01-01T00:00:00.000Z',
        active: true,
        created_at: '2024-02-22T04:29:36.000Z',
        region: {
          id: 2,
          label: 'Interior',
        },
        medical_specialties: [
          {
            id: 2,
            label: 'teste2',
          },
        ],
      },
      {
        id: 34,
        company_name: 'aaaaaaaaaaaaaaaaaaaa ',
        fantasy_name: 'Nome Fantasia',
        cnpj: '12345678901234',
        inauguration_date: '2023-01-01T00:00:00.000Z',
        active: true,
        created_at: '2024-02-22T04:29:56.000Z',
        region: {
          id: 6,
          label: 'SP2',
        },
        medical_specialties: [
          {
            id: 1,
            label: 'teste1',
          },
          {
            id: 2,
            label: 'teste2',
          },
          {
            id: 3,
            label: 'teste3',
          },
        ],
      },
      {
        id: 38,
        company_name: 'aaaaaaaaaaaaaaaaaaaa ',
        fantasy_name: 'Nome Fantasia',
        cnpj: '12345678901234',
        inauguration_date: '2023-01-01T00:00:00.000Z',
        active: true,
        created_at: '2024-02-22T04:29:36.000Z',
        region: {
          id: 1,
          label: 'Alto tietê',
        },
        medical_specialties: [
          {
            id: 1,
            label: 'teste1',
          },
        ],
      },
    ]);
  }
}

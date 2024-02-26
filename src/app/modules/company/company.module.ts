import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './pages/company/company.component';
import { DefaultButtonComponent } from 'src/app/shared/layout/default-button/default-button.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginacaoDirective } from 'src/app/shared/directives/pagination.directive';
import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { CompanyFormComponent } from './components/company-form/company-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyActionComponent } from './pages/company-action/company-action.component';
import { DefaultBackComponent } from 'src/app/shared/layout/default-back/default-back.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DefaultSearchInputComponent } from '../../shared/layout/default-search-input/default-search-input.component';
import { CompanyListSpecialtyComponent } from './components/company-list-specialty/company-list-specialty.component';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
  },
  {
    path: ':type/:id',
    component: CompanyActionComponent,
  },
];

@NgModule({
  declarations: [
    CompanyComponent,
    CompanyListComponent,
    CompanyFormComponent,
    CompanyActionComponent,
    CompanyListSpecialtyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DefaultButtonComponent,
    DefaultBackComponent,
    MatPaginatorModule,
    PaginacaoDirective,
    NgxMaskModule.forChild(),
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    DefaultSearchInputComponent,

  ],
})
export class CompanyModule {}

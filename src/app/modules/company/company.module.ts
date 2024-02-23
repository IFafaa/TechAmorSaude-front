import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './pages/company/company.component';
import { DefaultButtonComponent } from 'src/app/shared/layout/default-button/default-button.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginacaoDirective } from 'src/app/shared/directives/pagination.directive';
import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { CompanyFormComponent } from './pages/company-form/company-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
  },
  {
    path: ':type/:id',
    component: CompanyFormComponent,
  },
];

@NgModule({
  declarations: [CompanyComponent, CompanyListComponent, CompanyFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DefaultButtonComponent,
    MatPaginatorModule,
    PaginacaoDirective,
    NgxMaskModule.forChild(),
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
})
export class CompanyModule {}

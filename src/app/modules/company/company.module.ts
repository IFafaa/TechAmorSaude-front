import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './pages/company/company.component';
import { DefaultButtonComponent } from 'src/app/shared/layout/default-button/default-button.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginacaoDirective } from 'src/app/shared/directives/pagination.directive';
import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
  },
];

@NgModule({
  declarations: [CompanyComponent, CompanyListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DefaultButtonComponent,
    MatPaginatorModule,
    PaginacaoDirective,
    NgxMaskModule.forChild(),
  ],
})
export class CompanyModule {}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-company-list-specialty',
  templateUrl: './company-list-specialty.component.html',
  styleUrls: ['./company-list-specialty.component.scss'],
})
export class CompanyListSpecialtyComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public readonly specialties: { label: string; id: number }[],
    private readonly ref: MatDialogRef<CompanyListSpecialtyComponent>
  ) {}

  close() {
    this.ref.close();
  }
}

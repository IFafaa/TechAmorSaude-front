import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IError } from 'src/app/core/services/error.service';
import { DefaultButtonComponent } from '../default-button/default-button.component';

@Component({
  selector: 'default-error-modal',
  templateUrl: './default-error-modal.component.html',
  styleUrls: ['./default-error-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, DefaultButtonComponent],
})
export class DefaultErrorModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly error: IError,
    private readonly matDialogRef: MatDialogRef<DefaultErrorModalComponent>
  ) {}

  close() {
    this.matDialogRef.close();
  }
}

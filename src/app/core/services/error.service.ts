import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DefaultErrorModalComponent } from 'src/app/shared/layout/default-error-modal/default-error-modal.component';

export interface IError {
  title: string;
  status: number;
  error: string;
}

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private readonly matDialog: MatDialog) {}

  open(title: string, status: number, error: string) {
    const dataConfig: IError = { title: title, status: status, error: error };
    this.matDialog.open(DefaultErrorModalComponent, {
      data: dataConfig,
    });
  }
}

import { AbstractControl, ValidatorFn } from '@angular/forms';

export function minDateValidator(minDate: Date = new Date()): ValidatorFn {
  // Definindo a data mínima para o início do dia da data fornecida
  const minDateTime = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());

  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const value = control.value;
    if (value === null || value === '') {
      return null;
    }
    const controlDate = new Date(value);
    if (isNaN(controlDate.getTime())) {
      return { invalidDate: true };
    }
    const controlDateTime = new Date(controlDate.getFullYear(), controlDate.getMonth(), controlDate.getDate());
    return controlDateTime < minDateTime ? { minDate: true } : null;
  };
}

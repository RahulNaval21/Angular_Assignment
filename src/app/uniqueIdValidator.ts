import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function uniqueBookIdValidator(existingBookIds: string[]): ValidatorFn {
    
  return (control: AbstractControl): ValidationErrors | null => {
    console.log(control.value)
    if (!control.value) {
      return null;
    }
console.log(existingBookIds)
    const idExists = existingBookIds.includes(control.value);
    console.log(idExists)
    return idExists ? { notUnique: true } : null;
  };
}

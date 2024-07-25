import { AbstractControl, ValidatorFn } from '@angular/forms';

export function nonNegativeIntegerValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    // Check if the value is a non-negative integer
    console.log("reached in non negative integer validator")
    const value = control.value;
    console.log(value);
    const isValid = Number.isInteger(value) && value >= 0;
    console.log(isValid);
    return isValid ? null : { 'nonNegativeInteger': { value: control.value } };
  };
}

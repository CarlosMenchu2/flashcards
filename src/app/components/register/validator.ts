import { ValidationErrors, AbstractControl } from '@angular/forms';

export class Validator {

  static passwordMatchValidator(control: AbstractControl): ValidationErrors | null{
    if(control){
      const password: string = control.get('password').value; // get password from our password form control
      const confirmPassword: string = control.get('confirmPassword').value; // get password from our confirmPassword form control
      // compare is the password math
      if (password !== confirmPassword) {
        // if they don't match, set an error in our confirmPassword form control
        control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
        return { NoPassswordMatch: true };
      }
    }
    return null;
  }

}

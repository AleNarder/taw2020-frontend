import { FormControl, Validators } from '@angular/forms' 

export class FormValidator {
  email = new FormControl('', [Validators.required, Validators.email])
}

import { FormControl, Validators } from '@angular/forms';

function requiredError (field, fieldname) {
  if (field.hasError('required')) {
    return `Il campo ${fieldname} non può essere vuoto`
  }
}

function maxLenghtError (field, fieldname, max) {
  if (field.hasError('max')) {
    return `Il campo ${fieldname} deve avere al massimo ${max} caratteri`
  }
}

function patternError (field, fieldname) {
  if (field.hasError('pattern')) {
    return `Il campo ${fieldname} deve contenere: `
  }
}

function mailError (field, fieldname) {
  if (field.hasError('email')) {
    return `Il campo ${fieldname} non è un indirizzo email valido `
  }
}

export default {

  firstname : {
    check: () => new FormControl('',[Validators.required]),
    validate: (field) => requiredError(field, 'nome') 
  },
  lastname  : {
    check: () => new FormControl('', [Validators.required]),
    validate: (field) => requiredError(field, 'cognome') 
  },
  password  : {
    check: () => new FormControl('', [Validators.required, Validators.pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'))]), 
    validate: (field) => requiredError(field, 'password') || patternError (field, 'password')
  },
  zipcode   : {
    check: () => new FormControl('',[Validators.required, Validators.maxLength(5)]),
    validate: (field) => requiredError(field, 'CAP') || maxLenghtError(field, 'CAP', 5)
  },
  address   : {
    check: () => new FormControl('',[Validators.required]),
    validate: (field) => requiredError(field, 'indirizzo')
  },
  state     : {
    check: () => new FormControl('',[Validators.required]),
    validate: (field) => requiredError(field, 'provincia')
  },
  country   : {
    check: () => new FormControl('',[Validators.required]),
    validate: (field) => requiredError(field, 'stato')
  },
  email     : {
    check: () =>new FormControl('', [Validators.required, Validators.email]),
    validate: (field) => requiredError(field, 'email') || mailError(field, 'email')
  }
}
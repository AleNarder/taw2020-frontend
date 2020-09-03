import { FormControl, Validators } from '@angular/forms';

function requiredError (field, fieldname) {
  if (field.hasError('required')) {
    return `Il campo ${fieldname || ''} non può essere vuoto`
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

function atLeastTomorrowError (field, fieldname) {
  if (field.hasError()) {
    return `La data ${fieldname} `
  }
}

function atLeastTomorrow (formControl: FormControl) {
  const today = new Date()
  if (formControl.value > today) {
    return null
  } else {
    return {
      dateValidator: {
        valid: false
      }
    }
  }
}

export default {
  generic: {
    check: () => new FormControl('',[Validators.required]),
    validate: (field: string | FormControl, fieldname ?: string) => requiredError(field, fieldname)
  },
  offer: {
    check: () => new FormControl('',[Validators.required]),
    validate: (field) => requiredError(field, 'offerta')
  },
  expire: {
    check: () => new FormControl('', [atLeastTomorrow]),
    validate: (field) => requiredError(field, 'offerta')
  },
  registration: {
    firstname: {
      check: () => new FormControl('',[Validators.required]),
      validate: (field) => requiredError(field, 'nome')
    },
    lastname: {
      check: () => new FormControl('', [Validators.required]),
      validate: (field) => requiredError(field, 'cognome')
    },
    password: {
      check: () => new FormControl('', [Validators.required, Validators.pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'))]),
      validate: (field) => requiredError(field, 'password') || patternError (field, 'password')
    },
    address: {
      check: () => new FormControl('',[Validators.required]),
      validate: (field) => requiredError(field, 'indirizzo')
    },
    email: {
      check: () =>new FormControl('', [Validators.required, Validators.email]),
      validate: (field) => requiredError(field, 'email') || mailError(field, 'email')
    }
  }
}

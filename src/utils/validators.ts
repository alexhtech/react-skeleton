interface Field {
  value: string
}

export function minLength(length = 1) {
  return ({ value }: Field) => (value.length < length ? `Minimum length is ${length}` : '')
}

export function maxLength(length = 64) {
  return ({ value }: Field) => (value.length > length ? `Maximum length is ${length}` : '')
}
export function isEmail({ value }: Field) {
  return !/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/gi.test(value) ? 'Incorrect email' : ''
}

export function isRequired(errorText = 'Required') {
  return ({ value }: { value: boolean | string | number }) => {
    switch (typeof value) {
      case 'boolean':
        return !value ? errorText : ''

      case 'string':
        return !value.length ? errorText : ''

      case 'number':
        return !String(value).length ? errorText : ''

      default:
        return ''
    }
  }
}

export function isDateMask({ value }: Field) {
  return !/^(20|21|19)[0-9]{2}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(value) && 'Incorrect date format'
}

export function isPassword({ value }: Field) {
  return (
    !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*()_+\\\-=[\]{};':",./<>?`~]{8,}$/.test(value) &&
    'Password too simple'
  )
}

export function spaceCheck({ value }: Field) {
  return /\s/.test(value) ? 'Spaces forbidden' : ''
}

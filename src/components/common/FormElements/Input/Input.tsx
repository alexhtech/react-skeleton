import React, { useRef } from 'react'
import { FieldError, useForm } from 'react-hook-form'
import { ValidationRules } from 'react-hook-form/dist/types/validator'

import { Label, Error } from '../styles'
import { Container } from './styles'

interface IInput {
  disabled?: boolean
  label?: string
  name: string
  placeholder?: string
  type?: string
  error?: FieldError
  register: ReturnType<typeof useForm>['register']
  rules?: ValidationRules
}

const Input = (props: IInput) => {
  const { label, placeholder, type, disabled, error, register, rules, ...rest } = props
  const inputRef = useRef<HTMLInputElement | null>(null)

  return (
    <Container error={!!error} isDisabled={disabled}>
      {label && <Label error={!!error}>{label}</Label>}
      <input
        type={type}
        ref={(ref) => {
          if (ref) {
            register(ref, rules)
            inputRef.current = ref
          }
        }}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
      />
      {error && <Error>{error.message}</Error>}
    </Container>
  )
}

export default Input

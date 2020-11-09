import Input from '@common/FormElements/Input'
import localStorageService from '@utils/localStorage'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'

interface Values {
  email: string
  password: string
}
function LoginForm() {
  const { register, handleSubmit, errors } = useForm<Values>()
  const history = useHistory()

  function onSubmit(values: Values) {
    console.log(values)
    localStorageService.token =
      'eyJleHAiOjE2MDQ5NTQyNjMsInN1YiI6NTQwLCJ1aWQiOiIyZTY0NzFlNC1iNjI3LTQ4YzYtYWQwZS01MTA0YWZkMGQ5MzYiLCJydWlkIjoiMDhhMTNjNDQtYmYzYi00Y2E2LThhNDYtZDZhYjNmNmQyMjFhIn0'
    history.replace('/')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input name="email" register={register} rules={{ required: true }} error={errors.email} />
      <Input name="password" register={register} rules={{ required: true }} error={errors.password} />
      <button type="submit">submit</button>
    </form>
  )
}

export default LoginForm

import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Input, Form, Button, Title, Error } from './styles'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Form onSubmit={handleSubmit} disabled={disabled}>
      <Title>{title}</Title>
      <Input disabled={disabled} placeholder='Email' {...email} />
      <Input disabled={disabled} placeholder='Password' type='password' {...password} />
      <Button disabled={disabled}>{title}</Button>
      {error && <Error>{error}</Error>}
    </Form>
  )
}

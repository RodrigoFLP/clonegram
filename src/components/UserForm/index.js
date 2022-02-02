import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Input, Form, Button, Title } from './styles'

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Title>{title}</Title>
      <Input placeholder='Email' {...email} />
      <Input placeholder='Password' type='password' {...password} />
      <Button>{title}</Button>
    </Form>
  )
}

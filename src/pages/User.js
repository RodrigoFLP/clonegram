import React from 'react'
import { useContext } from 'react/cjs/react.development'
import { Button, Form } from '../components/UserForm/styles'
import { Context } from '../Context'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <Form onSubmit={(e) => {
        e.preventDefault()
        removeAuth()
      }}
      >
        <h1>User</h1>
        <Button>Log out</Button>
      </Form>
    </>
  )
}

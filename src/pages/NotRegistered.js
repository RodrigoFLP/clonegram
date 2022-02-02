import React from 'react'
import { RegisterMutation } from '../cointainers/RegisterMutation'
import { UserForm } from '../components/UserForm'
import Context from '../Context'

export const NotRegistered = () => {
  return (
    <Context.Consumer>
      {({ isAuth, activateAuth }) =>
        <div>
          <RegisterMutation>
            {(register) => {
              const onSubmit = ({ email, password }) => {
                const input = { email, password }
                const variables = { input }
                register({ variables }).then(() => activateAuth()).catch((e) => window.alert(e))
              }
              return <UserForm onSubmit={onSubmit} title='Registrarse' />
            }}

          </RegisterMutation>
          <UserForm onSubmit={activateAuth} title='Ingresar' />
        </div>}
    </Context.Consumer>
  )
}

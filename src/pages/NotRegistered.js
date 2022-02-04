import React, { useContext } from 'react'
import { LoginMutation } from '../cointainers/LoginMutation'
import { RegisterMutation } from '../cointainers/RegisterMutation'
import { UserForm } from '../components/UserForm'
import { Context } from '../Context'

export const NotRegistered = () => {
  const { activateAuth } = useContext(Context)

  return (
    <>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            register({ variables }).then(({ data }) => {
              const { signup } = data
              console.log(signup)
              activateAuth(signup)
            })
          }

          const errMsg = error && 'Ha ocurrido un error, revisa el correo ingresado'

          return <UserForm error={errMsg} onSubmit={onSubmit} title='Registrarse' disabled={loading} />
        }}

      </RegisterMutation>
      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            login({ variables }).then(({ data }) => {
              const { login } = data
              activateAuth(login)
            })
          }
          const errMsg = error && 'Ha ocurrido un error, revisa los datos ingresados'

          return <UserForm error={errMsg} disabled={loading} onSubmit={onSubmit} title='Ingresar' />
        }}

      </LoginMutation>

    </>

  )
}

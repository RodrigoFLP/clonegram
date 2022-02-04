import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Favorites } from './pages/Favorites'
import { User } from './pages/User'
import { NotRegistered } from './pages/NotRegistered'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import { Detail } from './pages/Details'
import { NavBar } from './components/NavBar'
import { Context } from './Context'
import { useContext } from 'react/cjs/react.development'
import { NotFound } from './pages/NotFound'

export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route exact path='/*' element={<NotFound />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/pet/:id' element={<Home />} />
        <Route exact path='/detail/:id' element={<Detail />} />
        <Route exact path='/favorites' element={isAuth ? <Favorites /> : <Navigate to='/login' />} />
        <Route exact path='/user' element={isAuth ? <User /> : <Navigate to='/login' />} />:
        <Route exact path='/login' element={!isAuth ? <NotRegistered /> : <Navigate to='/' />} />
      </Routes>

      <NavBar />
    </BrowserRouter>
  )
}

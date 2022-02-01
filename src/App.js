import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Detail } from './pages/Details'
import { NavBar } from './components/NavBar'

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/pet/:id' element={<Home />} />
        <Route exact path='/detail/:id' element={<Detail />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  )
}

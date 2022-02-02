import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Favorites } from './pages/Favorites'
import { User } from './pages/User'
import { NotRegistered } from './pages/NotRegistered'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Detail } from './pages/Details'
import { NavBar } from './components/NavBar'
import Context from './Context'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}

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
      <Context.Consumer>
        {({ isAuth }) => isAuth
          ? <Routes>
            <Route exact path='/favorites' element={<Favorites />} />
            <Route exact path='/user' element={<User />} />
            </Routes>
          : <Routes><Route exact path='/favorites' element={<NotRegistered />} />
            <Route exact path='/user' element={<NotRegistered />} />
            </Routes>}
      </Context.Consumer>
      <NavBar />
    </BrowserRouter>
  )
}

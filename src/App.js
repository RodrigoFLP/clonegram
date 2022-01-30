import React from 'react'
import { MainListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <MainListOfCategories />
    <ListOfPhotoCards />
  </>
)

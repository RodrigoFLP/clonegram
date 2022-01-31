import React from 'react'
import { MainListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { ListOfPhotoCards } from './cointainers/ListOfPhotoCards'
import { PhotoCardWithQuery } from './cointainers/PhotoCardWithQuery'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyle />
      <Logo />

      {
      detailId
        ? <PhotoCardWithQuery id={detailId} />
        : <>
          <MainListOfCategories />
          <ListOfPhotoCards categoryId={2} />
        </>
}

    </>
  )
}

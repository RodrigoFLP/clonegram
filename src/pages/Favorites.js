import React from 'react'
import { GetFavs } from '../cointainers/GetFavorites'

export const Favorites = () => {
  return (
    <div style={{ padding: '0 20px 0 10px' }}>
      <h1>Favoritos</h1>
      <GetFavs />
    </div>
  )
}

import React from 'react'
import { Grid, Img, Link } from './styles'

export const ListOfFavs = ({ favs = [], id = '' }) => {
  return (

    <Grid>
      {favs.map(fav =>
        <Link key={fav.id} to={`/detail/${fav.id}`}>
          <Img src={fav.src} />
        </Link>)}
    </Grid>

  )
}

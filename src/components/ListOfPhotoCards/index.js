import React from 'react'
import { PhotoCard } from '../PhotoCard'
import data from '../../../api/db.json'

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {data.photos.map((val) => <PhotoCard key={val.id} src={val.src} />)}
    </ul>
  )
}

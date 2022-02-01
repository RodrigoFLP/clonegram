import React from 'react'
import { useParams } from 'react-router-dom'
import { ListOfPhotoCards } from '../cointainers/ListOfPhotoCards'
import { MainListOfCategories } from '../components/ListOfCategories'

export const Home = () => {
  const { id } = useParams()
  return (
    <><MainListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}

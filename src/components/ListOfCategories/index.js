import React, { useEffect, useState } from 'react'
import { PlaceHolder } from '../PlaceHolder/styles'
import { Category } from '../Category'
import { Item, UnorderedList } from './styles'
import { useOnScroll } from '../../hooks/useOnScroll'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    window.fetch('https://clonegram-five.vercel.app/categories').then(res => res.json()).then(data => {
      setCategories(data)
      setLoading(false)
    })
  }, [])

  return { categories, loading }
}

const ListOfCategories = ({ refs, fixed }) => {
  const { categories, loading } = useCategoriesData()

  return (
    <UnorderedList ref={refs} fixed={fixed}>
      {loading
        ? [0, 1, 2, 3, 4, 5].map(categorie =>
          <Item key={categorie}>
            <PlaceHolder />
          </Item>)
        : categories.map(categorie =>
          <Item key={categorie.id}>
            <Category {...categorie} path={`/pet/${categorie.id}`} />
          </Item>)}
    </UnorderedList>
  )
}

export const MainListOfCategories = () => {
  const { showFixed } = useOnScroll()

  return (
    <div>
      <ListOfCategories />
      {showFixed && <ListOfCategories fixed />}
    </div>

  )
}

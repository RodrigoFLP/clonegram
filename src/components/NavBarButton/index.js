import React from 'react'
import { Link } from './styles'
import { MdFavorite } from 'react-icons/md'

export const NavBarButton = () => {
  return (
    <Link to='/'>
      <MdFavorite size={28} />
    </Link>
  )
}

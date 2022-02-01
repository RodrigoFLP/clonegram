import React from 'react'
import { Nav, Link } from './styles'
import { MdHome, MdFavorite, MdPerson } from 'react-icons/md'

export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'>
        <MdHome size={28} />
      </Link>
      <Link to='/favorites'>
        <MdFavorite size={28} />
      </Link>
      <Link to='/user'>
        <MdPerson size={28} />
      </Link>
    </Nav>
  )
}

import React from 'react'
import { Link, Image } from './styles'

const DEFAULT_IMAGE = 'https://i.pravatar.cc/150?img=65'

export const Category = ({ cover = DEFAULT_IMAGE, emoji = '?', path, loading }) => (

  <Link to={path}>
    <Image src={cover} />
    <div className='emoji'>{emoji}</div>
  </Link>

)

import React, { useEffect, useState } from 'react'
import { ImgWrapper, Img, Button, ContentWrapper } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const { elementRef, visible } = useNearScreen({ persistent: false })
  const [liked, setLiked] = useState(() => {
    try {
      return window.localStorage.getItem(`liked-${id}`)
    } catch (e) {
      return false
    }
  })

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(`liked-${id}`, value)
      setLiked(value)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <ContentWrapper ref={elementRef}>
        {visible && <a href={`/detail/${id}`}>
          <ImgWrapper>
            <Img src={src} />
          </ImgWrapper>
                    </a>}
        <Button onClick={() => setLocalStorage(!liked)}>
          <Icon size='24px' />
          {likes} likes
        </Button>
      </ContentWrapper>
    </div>
  )
}

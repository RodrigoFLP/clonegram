import React from 'react'
import { ImgWrapper, Img, ContentWrapper } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { ToggleLikeMutation } from '../../cointainers/ToggleLikeMutation'
import { LikeButton } from '../LikeButton'
import { Link } from 'react-router-dom'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const { elementRef, visible } = useNearScreen({ persistent: false })

  const { liked, setLocalStorage } = useLocalStorage(id, false)

  return (
    <div>
      <ContentWrapper ref={elementRef}>
        {visible &&
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>}
        <ToggleLikeMutation>
          {(toggleLike) => {
            const handleLikeClick = () => {
              !liked && toggleLike({ variables: { input: { id } } })
              setLocalStorage(!liked)
            }
            return <LikeButton liked={liked} likes={likes} onClick={handleLikeClick} />
          }}

        </ToggleLikeMutation>
      </ContentWrapper>
    </div>
  )
}

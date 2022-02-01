import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const ImgWrapper = styled.div`
border-radius: 20px;
display: block;
height: 0;
overflow: hidden;
padding: 56.25% 0 0 0;
position: relative;
width: 100%;
`

export const Img = styled.img`
${fadeIn()}
height: 100%;
object-fit: cover;
position:absolute;
top:0;
width: 100%;
`

export const ContentWrapper = styled.article`
padding: 8px;
min-height: 200px;
`

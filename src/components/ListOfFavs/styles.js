import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Grid = styled.div`
padding-top: 20px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
`

export const Link = styled(LinkRouter)`

border-radius: 20px;
margin: 1%;
overflow: hidden;
width: 31.33%;
position: relative;
&:after{
    content: '';
    padding-bottom: 100%;
    display: block;
}
`

export const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
position: absolute;
`

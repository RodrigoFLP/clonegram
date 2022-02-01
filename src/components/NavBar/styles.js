import styled from 'styled-components'
import { NavLink as LinkRouter } from 'react-router-dom'
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
width: 100%;
height: 60px;
background-color: white;
display: flex;
flex-direction: row;
bottom: 0;
position: fixed;
align-items: center;
justify-content: space-evenly;
background-color: white;
z-index: 1000;
`

export const Link = styled(LinkRouter)`
border-radius: 20px;
padding: 8px;
margin: 0 auto;
color: #c0c0c0;
display: flex;
justify-content: center;
&[aria-current]{
    
    color: black;
    &:after {
        ${fadeIn()}
        content: '.';
        position: absolute;
        bottom: 0;
        font-size: 40px;
    }
}
`

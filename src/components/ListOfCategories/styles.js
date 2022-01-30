import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const UnorderedList = styled.ul`
${fadeIn({ time: '0.5s' })}
display: flex;
flex-direction: row;
margin: 0;
padding: 5px;
overflow: scroll;
width: 100%;
${props => props.fixed && css`
    padding: 8px;
    background-color: #e3e3e3;
    box-shadow: 7px 0px 14px rgba(0,0,0,0.1);

    border-radius: 20px;
    margin:0 auto;
    left: 0;
    position: fixed;
    z-index: 1;
    top:0;
    right: 0;
    transform: scale(0.75);
    max-width: 400px;
`}
`

export const Item = styled.li`
padding: 5px;
`

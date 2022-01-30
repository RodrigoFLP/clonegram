import styled, { keyframes } from 'styled-components'

const keyframesGradient = keyframes`
0% {
background-position: 0% 50%;
}
50% {
background-position: 100% 50%;
}
100% {
background-position: 0% 50%;
}
`

export const PlaceHolder = styled.div`
  height:75px;
  position: relative;
  flex: none;
  width: 75px;
  border-radius: 50%;
  background: linear-gradient(-45deg, #d0d0d0, #e4e4e4, #d0d0d0, #d0d0d0);
  background-size: 200% 100%;
  animation: ${keyframesGradient} 3s ease infinite;
`

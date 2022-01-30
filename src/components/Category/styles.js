import styled from 'styled-components'

export const Anchor = styled.a`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  width: 75px;
  >.emoji{
    padding-top: 8px;
  }
`

export const Image = styled.img`
  border-radius: 50%;
  box-shadow: 7px 7px 14px #c1c1c1,
             -7px -7px 14px #ffffff;
  border: 1px solid #ddd;
  overflow: hidden;
  height: auto;
  object-fit: cover;
  height: 75px;
  width: 75px;
`

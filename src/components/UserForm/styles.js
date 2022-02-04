import styled from 'styled-components'

export const Input = styled.input`
padding: 14px;
border-radius: 20px;
margin-bottom: 10px;
background-color: white;
border: 0;
&[disabled] {
    opacity: 0.4;
}
`

export const Form = styled.form`
display: flex;
padding: 0 20px 0 20px;
flex-direction: column;
&[disabled] {
    opacity: 0.4;
}
`

export const Button = styled.button`
width: 100%;
background-color: #e4485c;
padding: 14px;
border-radius: 20px;
color: white;
font-weight: bold;
&:hover {
    background-color: #d03b9b;
}
&[disabled] {
    opacity: 0.4;
}
`
export const Title = styled.h3`
padding: 20px 0 10px 0;
text-align: center;
`

export const Error = styled.span`
color: red;
padding-top: 8px;
font-weight: bold;
font-size: 12px;
`

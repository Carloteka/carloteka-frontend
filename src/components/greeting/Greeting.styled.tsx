import styled from 'styled-components'

export const GreetingContainer = styled.section`
padding: 71px 64px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 788px;
  // flex-shrink: 0;
  background: #dad4c8;
`
export const Box = styled.div`
  height:646px;
  width: 288px;
  display: flex;
  flex-direction:row;
  align-items: center;
    @media screen and (min-width: 768px) {
      width: 960px;
  }

  @media screen and (min-width: 1440px) {
    width: 1312px;
  }
`



export const Title = styled.h1`
  width: 640px;
`

export const Description = styled.p`
margin: 56px 0 40px;
  width: 640px;
  color: #363535;
  font-family: Rubik;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
`
export const Button = styled.button`
position : relative;
    background-color: #2d3f24;
    color: white;
    border: none;
    height: 48px;
    width: 304px;
    font-family: 'Rubik';
    font-size: 19px;
    line-height: 19px;
    font-weight: 400;
    text-transform: uppercase;
  
  img {position: absolute;
   
    right: 24px;
    top: 16px;
  }
`


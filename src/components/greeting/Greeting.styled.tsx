import styled from 'styled-components'

export const GreetingContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 1440px;
  height: 788px;
  flex-shrink: 0;
  background: #dad4c8;
  box-sizing: border-box;
`
export const Box = styled.div({
  height: '646px',
  width: '1312px',
  display: 'flex',
  alignItems: 'center',
})
export const Text = styled.div`
  display: block;
  align-items: center;
  gap: 32px;
`

export const Title = styled.div`
  width: 640px;
  color: #101010;
  font-family: Rubik;
  font-size: 55px;
  font-style: normal;
  font-weight: 600;
  line-height: 63px;
`

export const Description = styled.div`
  width: 640px;
  color: #363535;
  font-family: Rubik;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  margin-top: 56px;
`
export const Button = styled.div`
  margin-top: 40px;
  button {
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
  }
  img {
    height: 16px;
    position: relative;
    right: 35px;
    top: 3px;
  }
`
export const Img = styled.div`
  width: 640px;
  height: 646px;
`

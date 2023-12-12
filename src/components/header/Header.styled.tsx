import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
padding-inline: 32px;

width:100%;
height: 133px;
background-color: #DAD4C8;

   @media screen and (min-width: 1440px) {
     padding-inline: 64px;
    height: 112px;
  }
  `

export const LimiterConatiner = styled.div`    
margin: 0 auto;
    width: 288px;
    display: flex;
align-items: center;

  @media screen and (min-width: 768px) {
      width: 960px;
  }

  @media screen and (min-width: 1440px) {
    width: 1312px;
  }`

export const Logo = styled.div({
  background: '#143F18',
  width: '80px',
  height: '80px',
  color: '#EDEAE9',
  borderRadius: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  marginRight: '182px',
})

export const Catalog = styled(NavLink)({
  fontFamily: 'Rubik',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '25px',
  marginRight: '80px',
  textDecoration: "none",
})

export const Search = styled.div`
margin-right: 148px;
  display: flex;
  input {
    width: 390px;
    height: 25px;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #363535;
    background-color: #dad4c8;
    color: #5b5b59;
    font-family: Rubik;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
  }
  .search_icon {
    position: relative;
    right: 35px;
    width: 24px;
    height: 24px;    
  }
`
export const Actions = styled.div`
  width: 336px;
  display: flex;
  gap: 80px;
  .icon{
    height:24px
  }
  button{
    background-color: inherit;
    border: none;
  }
`
export const NavigationLink = styled(NavLink)`
textDecoration: "none",
`
import styled from 'styled-components'

export const HeaderContainer = styled.header({
  maxWidth: '1440px',
  height: '112px',
  boxSizing: 'border-box',
  display: 'flex',
  backgroundColor: '#DAD4C8',
  alignItems: 'center',
  paddingInline: '64px',

})

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

export const Catalog = styled.div({
  fontFamily: 'Rubik',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '25px',
  marginRight: '80px',
})

export const Search = styled.div`
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
    margin-right: 148px;
  }
`
export const Actions = styled.div`
  width: 336px;
  display: flex;
  gap: 80px;
  .icon{
    height:24px
  }
`

import styled from 'styled-components'

import { reduceEachLeadingCommentRange } from 'typescript'

export const HeaderContainer = styled.header({
  width: '1440px',
  display: 'flex',
  backgroundColor: '#EDEAE9',
  alignItems: 'center',
  padding: '16px 64px',
})

export const Logo = styled.div({
  background: '#143F18',
  width: '100px',
  height: '100px',
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
  input {
    width: 390px;
    height: 25px;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #ccc;
    background-color: #edeae9;
    color: #5b5b59;
    font-family: Rubik;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; 
    &:focus {
      outline: none;
      border-bottom: 1px solid #ccc;
    }
  }
  .search_icon {
    position: relative;
    right: 35px;
    width: 24px;
    height: 24px;
    margin-right: 182px;
  }
`
export const Actions = styled.div`
  width: 336px;
  display: flex;
  gap: 80px;
`
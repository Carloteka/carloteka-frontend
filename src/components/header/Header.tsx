import React from 'react'
import { HeaderContainer, Logo, Catalog, Search, Actions } from './Header.styled'

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Brand logo</Logo>
      <Catalog>Каталог</Catalog>
      <Search>
        <input type={'text'} placeholder="Пошук товарів"></input>
        <img className="search_icon" src="img/search.png" alt="search" />
      </Search>
      <Actions>
      <img className="person icon" src="img/person.png" alt="person" />
      <img className="heart icon" src="img/heart.png" alt="heart" />
      <img className="basket icon" src="img/basket.png" alt="basket" />
      <img className="menu icon" src="img/menu.png" alt="menu" />
      </Actions>
    </HeaderContainer>
  )
}

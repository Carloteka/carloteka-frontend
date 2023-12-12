
import { HeaderContainer, LimiterConatiner, Logo, Catalog, Search, Actions,NavigationLink } from './Header.styled'
export const Header = () => {
  return (
    <HeaderContainer><LimiterConatiner>     <Logo>Brand logo</Logo>
      <Catalog>Каталог</Catalog>
      <Search>
        <input type={'text'} placeholder="Пошук товарів"></input>
        <img className="search_icon" src="img/search.png" alt="search" />
      </Search>
      <Actions>
        <NavigationLink to={'/favorites'}><img className="heart icon" src="img/heart.png" alt="heart" /></NavigationLink>
      <NavigationLink to={'/cart'}><img className="basket icon" src="img/basket.png" alt="basket" /></NavigationLink>
      <button type="button"> <img className="menu icon" src="img/menu.png" alt="menu" /></button>
     
      </Actions></LimiterConatiner>
 
      
    </HeaderContainer>
  )
}

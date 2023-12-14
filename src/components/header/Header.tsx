
import { HeaderContainer, LimiterConatiner, Logo, Catalog, Search, Actions,NavigationLink } from './Header.styled'
export const Header = () => {
  return (
    <HeaderContainer><LimiterConatiner>     <Logo href='./index.htnl'>BrandLogo</Logo>
      <Catalog>Каталог</Catalog>
      <Search>
        <input type={'search'} placeholder="Пошук товарів"/><button type='submit' onClick={() => {
          return false;
        }}><img className="search_icon" src="img/search.png" alt="search" width={24} height={24}/></button>
        
      </Search>
      <Actions>
        <NavigationLink to={'/favorites'}><img className="heart icon" src="img/heart.png" alt="heart" /></NavigationLink>
      <NavigationLink to={'/cart'}><img className="basket icon" src="img/basket.png" alt="basket" /></NavigationLink>
      <button type="button"> <img className="menu icon" src="img/menu.png" alt="menu" /></button>
     
      </Actions></LimiterConatiner>
 
      
    </HeaderContainer>
  )
}

import {
  Wrapper,
  FlexContainer,
  Card,
  Img,
  Name,
  Div,
  Price,
  Star,
  BuyBtnDesc,
  DelBtn,
  BuyBtn,
} from './CardForFavoritesAndCart.styled';
import sprite from '../../images/sprite.svg';
import { toggleLocalStorage } from 'src/utils/toggleLocalStorage';

export const CardForFavoritesAndCart = ({ favoriteGoods, onClickDelete }) => {
  return (
    <Wrapper>
      <ul>
        {favoriteGoods.map((el) => (
          <Card key={el.id_name}>
            <Img
              src={`http://localhost:8000/${el.images[0].image}`}
              width={60}
              height={82}
              alt={el.name}
            />
            <Name>Декоративна ваза з натурального дерева</Name>
            <Div>
              <FlexContainer>
                <ul>
                  {[0, 1, 2, 3, 4].map((index) => (
                    <li key={index}>
                      <Star rate={index <= 3}>
                        <use href={`${sprite}#star`} />
                      </Star>
                    </li>
                  ))}
                </ul>
                8
              </FlexContainer>
              <Price>₴ {el.price}</Price>
              <BuyBtnDesc
                type="button"
                onClick={() => toggleLocalStorage(false, 'cart', el.id_name)}
              >
                Купити
              </BuyBtnDesc>
              <DelBtn type="button" onClick={() => onClickDelete(el.id_name)}>
                <svg width={9} height={8}>
                  <use href={`${sprite}#del-x`} />
                </svg>
              </DelBtn>
            </Div>
            <BuyBtn
              type="button"
              onClick={() => toggleLocalStorage(false, 'cart', el.id_name)}
            >
              Купити
            </BuyBtn>
          </Card>
        ))}
      </ul>
    </Wrapper>
  );
};

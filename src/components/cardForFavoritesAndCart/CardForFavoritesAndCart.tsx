import { useState } from 'react';
import {
  Wrapper,
  FlexContainer,
  Card,
  Img,
  Name,
  Div,
  Price,
  IncrementBox,
  TotalPrice,
  Star,
  BuyBtnDesc,
  DelBtn,
  BuyBtn,
} from './CardForFavoritesAndCart.styled';
import sprite from '../../images/sprite.svg';
import { toggleLocalStorage } from 'src/utils/toggleLocalStorage';

export const CardForFavoritesAndCart = ({ goods, onClickDelete }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = (payload) => {
    if (payload + quantity === 0) {
      return;
    }
    setQuantity((prev) => prev + payload);
  };

  return (
    <Wrapper>
      <ul>
        {goods.map((el) => (
          <Card key={el.id_name}>
            <Img
              src={`http://localhost:8000/${el.images[0].image}`}
              width={60}
              height={82}
              alt={el.name}
            />
            <Name>Декоративна ваза з натурального дерева</Name>
            <Div>
              {location.pathname.includes('favorite') && (
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
              )}

              <Price>₴ {el.price}</Price>

              {location.pathname.includes('cart') && (
                <IncrementBox>
                  <button type="button" onClick={() => increment(-1)}>
                    --
                  </button>
                  <span>{quantity}</span>
                  <button type="button" onClick={() => increment(+1)}>
                    +
                  </button>
                </IncrementBox>
              )}

              {location.pathname.includes('cart') && (
                <TotalPrice>₴ {quantity * el.price}</TotalPrice>
              )}

              {location.pathname.includes('favorite') && (
                <BuyBtnDesc
                  type="button"
                  onClick={() => toggleLocalStorage(false, 'cart', el.id_name)}
                >
                  Купити
                </BuyBtnDesc>
              )}

              <DelBtn type="button" onClick={() => onClickDelete(el.id_name)}>
                <svg width={9} height={8}>
                  <use href={`${sprite}#del-x`} />
                </svg>
              </DelBtn>
            </Div>
            {location.pathname.includes('favorite') && (
              <BuyBtn
                type="button"
                onClick={() => toggleLocalStorage(false, 'cart', el.id_name)}
              >
                Купити
              </BuyBtn>
            )}
          </Card>
        ))}
      </ul>
    </Wrapper>
  );
};

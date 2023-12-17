import { useState } from 'react';
import {
  FlexContainer,
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

export const CardForFavoritesAndCart = ({ good, onClickDelete, increment }) => {
  const { images, name, price, id_name } = good;

  let quantity = good?.quantity ? good.quantity : 1;

  function incrementHandle(payload, id) {
    if (payload + quantity === 0) {
      return;
    }
    increment(payload + quantity, id);
  }

  return (
    <>
      <Img
        src={`http://localhost:8000/${images[0].image}`}
        width={60}
        height={82}
        alt={name}
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

        <Price>₴ {price}</Price>

        {location.pathname.includes('cart') && (
          <IncrementBox>
            <button type="button" onClick={() => incrementHandle(-1, id_name)}>
              --
            </button>
            <span>{quantity}</span>
            <button type="button" onClick={() => incrementHandle(+1, id_name)}>
              +
            </button>
          </IncrementBox>
        )}

        {location.pathname.includes('cart') && (
          <TotalPrice>₴ {quantity * price}</TotalPrice>
        )}

        {location.pathname.includes('favorite') && (
          <BuyBtnDesc
            type="button"
            onClick={() => toggleLocalStorage(false, 'cart', id_name)}
          >
            Купити
          </BuyBtnDesc>
        )}

        <DelBtn type="button" onClick={() => onClickDelete(id_name)}>
          <svg width={9} height={8}>
            <use href={`${sprite}#del-x`} />
          </svg>
        </DelBtn>
      </Div>
      {location.pathname.includes('favorite') && (
        <BuyBtn
          type="button"
          onClick={() => toggleLocalStorage(false, 'cart', id_name)}
        >
          Купити
        </BuyBtn>
      )}
    </>
  );
};

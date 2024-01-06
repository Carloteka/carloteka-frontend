import { useContext } from 'react';
import { CartContext } from '../Layout';
import { Increment } from '../Increment/Increment';
import {
  FlexContainer,
  Img,
  Name,
  Div,
  Price,
  TotalPrice,
  Star,
  BuyBtnDesc,
  DelBtn,
  BuyBtn,
} from './CardForFavoritesAndCart.styled';
import sprite from '../../images/sprite.svg';
import { toggleCartInLocalStorage } from '../../utils/toggleCartInLocalStorage';

type Good = {
  images: [{ image: string }];
  name: string;
  price: number;
  id_name: string;
  quantity: number;
};

interface CardForFavoritesAndCartProps {
  good: Good;
  onClickDelete: (id: string) => void;
  increment: (quantity: number, id: string) => void;
}

export const CardForFavoritesAndCart = ({
  good,
  onClickDelete,
  increment,
}: CardForFavoritesAndCartProps) => {
  const { images, name, price, id_name } = good;

  const { setAmountInCart } = useContext(CartContext);

  const quantity = good?.quantity ? good.quantity : 1;

  function buyBtnHandle() {
    toggleCartInLocalStorage(false, id_name);
    setAmountInCart((amountInCart: number) => amountInCart + 1);
  }

  return (
    <>
      <Img
        src={
          import.meta.env.PROD
            ? `/${images[0].image}`
            : `http://localhost:8000/${images[0].image}`
        }
        width={60}
        height={82}
        alt={name}
        loading="lazy"
      />
      <Name>Декоративна ваза з натурального дерева</Name>
      <Div>
        {location.pathname.includes('favorite') && (
          <FlexContainer>
            <ul>
              {[0, 1, 2, 3, 4].map((index) => (
                <li key={index}>
                  <Star
                    style={{ fill: index <= 3 ? '#5B5B59' : 'transparent' }}
                  >
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
          <Increment
            increment={increment}
            id_name={id_name}
            quantity={quantity}
          />
        )}

        {location.pathname.includes('cart') && (
          <TotalPrice>₴ {quantity * price}</TotalPrice>
        )}

        {location.pathname.includes('favorite') && (
          <BuyBtnDesc type="button" onClick={() => buyBtnHandle()}>
            Купити
          </BuyBtnDesc>
        )}

        <DelBtn
          type="button"
          onClick={() => {
            setAmountInCart((amountInCart: number) => amountInCart - 1);
            onClickDelete(id_name);
          }}
        >
          <svg width={9} height={8}>
            <use href={`${sprite}#del-x`} />
          </svg>
        </DelBtn>
      </Div>
      {location.pathname.includes('favorite') && (
        <BuyBtn type="button" onClick={() => buyBtnHandle()}>
          Купити
        </BuyBtn>
      )}
    </>
  );
};

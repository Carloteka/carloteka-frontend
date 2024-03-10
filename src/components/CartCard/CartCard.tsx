import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../Layout';
import { Increment } from '../Increment/Increment';
import { Img, Name, Div, Price, TotalPrice, DelBtn } from './CartCard.styled';
import sprite from '../../images/sprite.svg';
import { Good } from '../../../@types/custom';
import { checkLocalStorage } from '../../utils';

interface CartCardProps {
  good: Good;
  onClickDelete: (id: number) => void;
  increment: (quantity: number, good: Good) => void;
}

export const CartCard = ({ good, onClickDelete, increment }: CartCardProps) => {
  const { image_set, name, price, id } = good;

  const { setAmountInCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const newArray = checkLocalStorage('cart', []);

    const temp = newArray.find((el: { id: number }) => el.id === id);

    setQuantity(temp?.quantity ? temp.quantity : 1);
  }, [quantity]);

  return (
    <>
      <Img
        src={
          import.meta.env.PROD
            ? `http://carloteka.com/${image_set[0].image}`
            : `http://localhost:8000/${image_set[0].image}`
        }
        width={60}
        height={82}
        alt={name}
        loading="lazy"
      />
      <Name>Декоративна ваза з натурального дерева</Name>
      <Div>
        <p>Ціна</p>
        <Price>₴ {price}</Price>
      </Div>
      <Div>
        <p>Кількість</p>
        <Increment
          increment={increment}
          good={good}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </Div>
      <Div>
        <p>Загальна вартість</p>
        <TotalPrice>₴ {quantity * price}</TotalPrice>
      </Div>

      <DelBtn
        type="button"
        onClick={() => {
          setAmountInCart((amountInCart: number) => amountInCart - 1);
          onClickDelete(id);
        }}
      >
        <svg width={16} height={16}>
          <use href={`${sprite}#close`} />
        </svg>
      </DelBtn>
    </>
  );
};

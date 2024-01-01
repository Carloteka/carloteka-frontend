import { useState, useContext } from 'react';
import { CartContext } from '../../components/Layout';
import { PageTitle } from '../../components/pageTitle/PageTitle';
import { ContainerLimiter } from '../../components/containerLimiter/ContainerLimiter';
import { ListHeader } from '../../components/listHeader/ListHeader';
import {
  FavoritesBox,
  Card,
  Button,
  EmptyMessage,
  FlexBox,
  GoToCatalog,
  FlexContainer,
  CouponBox,
  BuyBox,
  GoToPayment,
} from './Cart.styled';
import { CardForFavoritesAndCart } from '../../components/cardForFavoritesAndCart/CardForFavoritesAndCart';
import { toggleLocalStorage } from '../../utils/toggleLocalStorage';
import sprite from '../../images/sprite.svg';

type Good = {
  images: [{ image: string }];
  name: string;
  price: number;
  id_name: string;
  quantity: number;
};

const Cart = () => {
  const { setAmountInCart } = useContext(CartContext);

  let goodsInCart = [];

  if (localStorage.getItem('cart')) {
    goodsInCart = JSON.parse(localStorage.getItem('cart') as string);
  }

  let goods: [] = [];

  if (localStorage.getItem('goods')) {
    goods = JSON.parse(localStorage.getItem('goods') as string);
  }

  const goodsInCartArray = goodsInCart.map((id: string) =>
    goods.find((el: { id_name: string }) => el.id_name === id),
  );

  const [inCart, setInCart] = useState(goodsInCartArray);

  function clearCart() {
    localStorage.cart = [];
    setInCart([]);
    setAmountInCart(0);
  }

  function delFromCart(id: string) {
    const newArray = goodsInCartArray.filter(
      (el: { id_name: string }) => el.id_name !== id,
    );
    toggleLocalStorage(true, 'cart', id);
    setInCart(newArray);
  }

  function getTotalPrice() {
    return inCart.reduce(
      (total: number, el: { quantity: number; price: number }) =>
        el.price * (el?.quantity ? el.quantity : 1) + total,
      0,
    );
  }

  function increment(quantity: number, id: string) {
    const newArray = [...inCart];
    newArray[
      inCart.findIndex((el: { id_name: string }) => el.id_name === id)
    ].quantity = quantity;
    localStorage.setItem('invoice', JSON.stringify(newArray));
    setInCart(newArray);
  }

  return (
    <>
      <PageTitle>Кошик</PageTitle>
      <ContainerLimiter paddingTopMob={'24px'} paddingTopDesc={'56px'}>
        <ListHeader />
        <FavoritesBox>
          <ul>
            {inCart.map((el: Good) => (
              <Card key={el.id_name}>
                <CardForFavoritesAndCart
                  good={el}
                  onClickDelete={delFromCart}
                  increment={increment}
                />
              </Card>
            ))}
          </ul>
        </FavoritesBox>
        {inCart.length > 0 ? (
          <FlexBox>
            <GoToCatalog to={'/catalog'}>
              <svg width={14} height={9}>
                <use href={`${sprite}#arrow-right`} />
              </svg>
              продовжити покупки
            </GoToCatalog>
            <Button type="button" onClick={() => clearCart()}>
              Очистити кошик
            </Button>
          </FlexBox>
        ) : (
          <EmptyMessage>
            <svg width={124} height={124}>
              <use href={`${sprite}#cart`} />
            </svg>
            <h2>Ваш кошик пустий</h2>
            <GoToCatalog to={'/catalog'}>
              <svg width={14} height={9}>
                <use href={`${sprite}#arrow-right`} />
              </svg>
              повернутись до покупок
            </GoToCatalog>
          </EmptyMessage>
        )}
        {inCart.length > 0 && (
          <FlexContainer>
            <CouponBox>
              <h3>Купон на знижку</h3>
              <label>
                Введіть номер купону
                <input type="text" placeholder="Номер купону" />
              </label>
              <Button
                className="width_full"
                type="button"
                onClick={() => console.log('apply coupon')}
              >
                застосувати купон
              </Button>
            </CouponBox>
            <BuyBox>
              <div>
                <div>
                  <p>Ціна</p>
                  <p>₴ {getTotalPrice()}</p>
                </div>
                <div>
                  <p>Загальна вартість</p>
                  <p>₴ {getTotalPrice()}</p>
                </div>
              </div>

              <GoToPayment to={'/payment'}>
                перейти до оплати
                <svg width={14} height={9}>
                  <use href={`${sprite}#arrow-right`} />
                </svg>
              </GoToPayment>
            </BuyBox>
          </FlexContainer>
        )}
      </ContainerLimiter>
    </>
  );
};
export default Cart;

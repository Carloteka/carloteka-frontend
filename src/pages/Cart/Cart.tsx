import { useState } from 'react';
import { PageTitle } from 'src/components/pageTitle/PageTitle';
import { ContainerLimiter } from 'src/components/containerLimiter/ContainerLimiter.tsx';
import { ListHeader } from 'src/components/listHeader/ListHeader';
import {
  Button,
  EmptyMessage,
  FlexBox,
  GoToCatalog,
  FlexContainer,
  CouponBox,
  BuyBox,
  GoToPayment,
} from './Cart.styled';
import { CardForFavoritesAndCart } from 'src/components/cardForFavoritesAndCart/CardForFavoritesAndCart';
import { toggleLocalStorage } from 'src/utils/toggleLocalStorage';
import sprite from '../../images/sprite.svg';

const Cart = () => {
  let goodsInCart = [];

  if (localStorage.getItem('cart')) {
    goodsInCart = JSON.parse(localStorage.getItem('cart'));
  }

  let goods = [];

  if (localStorage.getItem('goods')) {
    goods = JSON.parse(localStorage.getItem('goods'));
  }

  let goodsInCartArray = goodsInCart.map((id) =>
    goods.find((el) => el.id_name === id),
  );

  const [inCart, setInCart] = useState(goodsInCartArray);

  function clearCart() {
    localStorage.cart = [];
    setInCart([]);
  }

  function delFromCart(id) {
    const newArray = goodsInCartArray.filter((el) => el.id_name !== id);
    toggleLocalStorage(true, 'cart', id);
    setInCart(newArray);
  }

  function getTotalPrice() {
    return inCart.reduce((total, el) => el.price + total, 0);
  }
  console.log(getTotalPrice());

  return (
    <>
      <PageTitle>Кошик</PageTitle>
      <ContainerLimiter paddingTopMob={'24px'} paddingTopDesc={'56px'}>
        <ListHeader />
        <CardForFavoritesAndCart goods={inCart} onClickDelete={delFromCart} />
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

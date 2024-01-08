import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../components/Layout';
import { useNavigate } from 'react-router-dom';
import { PageTitle } from '../../components/pageTitle/PageTitle';
import { ContainerLimiter } from '../../components/containerLimiter/ContainerLimiter';
import {
  DeliveryBox,
  GoToDelivery,
  Form,
  RelativeDiv,
  Button,
  PaymentMethodDiv,
  FlexContainer,
  SuccessBox,
  OrderInfoDiv,
  DivBorderBottom,
  DeliveryInfoDiv,
  HeaderDiv,
  ModalMain,
  UserDiv,
  CardDiv,
} from './Payment.styled';
import { Modal } from '../../components/Modal/Modal';
import { InvoiceInfo } from '../../components/InvoiceInfo/InvoiceInfo';
import sprite from '../../images/sprite.svg';

type Good = {
  images: [{ image: string }];
  name: string;
  price: number;
  length: number;
  id_name: string;
  quantity: number;
};

const Payment = () => {
  const { setAmountInCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<undefined | string>();
  const [card] = useState<string>('visa');

  let goodsInCart: { id: string; amount: number }[] = [];

  if (localStorage.getItem('cart')) {
    goodsInCart = JSON.parse(localStorage.getItem('cart') as string);
  } else {
    navigate('/cart');
  }

  useEffect(() => {
    if (goodsInCart.length === 0 && isSuccess === false) {
      navigate('/cart');
    }
  }, []);

  let goods: [] = [];

  if (localStorage.getItem('goods')) {
    goods = JSON.parse(localStorage.getItem('goods') as string);
  }

  const goodsInCartArray = goods.filter(
    (el: { id_name: string; quantity: number }) =>
      goodsInCart.some((item) => {
        if (el.id_name === item.id) {
          el.quantity = item.amount;
          return true;
        } else return false;
      }),
  );

  const [inCart, setInCart] = useState<Good[]>(
    goodsInCartArray.filter((el: { length: number }) => el.length !== 0),
  );

  function getTotalPrice() {
    return inCart.reduce(
      (total: number, el: { quantity: number; price: number }) =>
        el.price * (el?.quantity ? el.quantity : 1) + total,
      0,
    );
  }

  function clearCart() {
    localStorage.cart = [];
    setInCart([]);
    setAmountInCart(0);
  }

  function submitHandle(e: React.FormEvent) {
    e.preventDefault();

    const target = e.target as HTMLFormElement;

    if (target.id === 'paymentSystems') {
      const checkbox = target[0] as HTMLInputElement;
      console.log('send to backend', { allow: checkbox.checked });
      setPaymentMethod(undefined);
    }

    if (target.id === 'payment') {
      const elementsCollection =
        target.elements as HTMLCollectionOf<HTMLInputElement>;

      const elements = Array.from(elementsCollection).filter(
        (el) => el.value !== '',
      );

      type dataObject = {
        [key: string]: string | undefined;
      };

      const data: dataObject = {};

      elements.map((el) => (data[el.name] = el.value));

      console.log('send to backend', data);
    }

    setIsSuccess(true);
    clearCart();
    // e.form.reset();
  }

  return (
    (inCart.length > 0 || isSuccess) && (
      <>
        <PageTitle>Оплата</PageTitle>
        <ContainerLimiter paddingTopMob={'56px'} paddingTopDesc={'80px'}>
          <GoToDelivery to={isSuccess ? '/catalog' : '/delivery'}>
            <svg width={16} height={16}>
              <use href={`${sprite}#arrow-right`} />
            </svg>
            <p>
              {isSuccess
                ? 'Повернутись до покупок'
                : 'Повернутись до розділу про доставку'}
            </p>
          </GoToDelivery>
          {isSuccess ? (
            <SuccessBox>
              <h2>Вітаємо! Ваша оплата успішна!</h2>
              <div>
                <OrderInfoDiv>
                  <h3>Деталі замовлення</h3>
                  <DivBorderBottom>
                    <p>Товар</p>
                    <p>Сума:</p>
                  </DivBorderBottom>

                  <ul>
                    {inCart?.map((el) => (
                      <li key={el.id_name}>
                        <div>
                          <p>
                            {el.name}
                            {el.quantity > 1 && ` (${el.quantity} шт.)`}
                          </p>
                          <p>₴ {el.price * el.quantity}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <DivBorderBottom>
                    <p>Доставка</p>
                    <p> ₴ 95</p>
                  </DivBorderBottom>
                  <div>
                    <span>Разом</span>
                    <p> ₴ {getTotalPrice()}</p>
                  </div>
                </OrderInfoDiv>
                <DeliveryInfoDiv>
                  <h3>Деталі доставки</h3>
                  <p>
                    Доставити до відділеня Нової Пошти №23, проспект Перемоги
                    10, Київ, Україна.
                  </p>
                  <p>
                    Ми відправляємо замовлення впродовж 1-3 робочих днів.
                    Вартість доставки базується на тарифах Нової Пошти /
                    Укрпошти.
                  </p>
                </DeliveryInfoDiv>
              </div>
            </SuccessBox>
          ) : (
            <DeliveryBox>
              <div>
                <Form onSubmit={submitHandle} id="payment">
                  <h2>Оплата онлайн</h2>
                  <FlexContainer>
                    <label>
                      Ім’я та прізвище
                      <input
                        placeholder="Taras Shevchenko"
                        name="name"
                        type="text"
                        required
                      />
                    </label>
                    <RelativeDiv>
                      <label>
                        Номер картки
                        <input
                          placeholder="111 222 333 444 555 666"
                          name="cardNo"
                          type="number"
                          required
                        />
                      </label>
                      <img
                        src="src/images/visa.png"
                        alt="visa and mastercard label"
                        width={79}
                        height={16}
                      />
                    </RelativeDiv>

                    <label className="short">
                      Місяць / Рік
                      <input
                        placeholder="01 / 2024"
                        name="cardExpire"
                        type="number"
                        className="short"
                        required
                      />
                    </label>
                    <label className="short">
                      CVC
                      <input
                        placeholder="123"
                        name="cvc"
                        type="password"
                        minLength={3}
                        maxLength={3}
                        className="short"
                        required
                      />
                    </label>
                    <Button type="submit">підтвердити</Button>
                  </FlexContainer>
                </Form>
                <span>OR</span>
                <PaymentMethodDiv>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('applePay')}
                  >
                    <svg width={58} height={24}>
                      <use href={`${sprite}#applePay`} />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('googlePay')}
                  >
                    <svg width={60} height={24}>
                      <use href={`${sprite}#googlePay`} />
                    </svg>
                  </button>
                </PaymentMethodDiv>
              </div>

              <aside style={{ paddingTop: '0' }}>
                <InvoiceInfo inCart={inCart} />
              </aside>
            </DeliveryBox>
          )}
          {paymentMethod && (
            <Modal onClose={() => setPaymentMethod(undefined)}>
              <HeaderDiv>
                <svg width={60} height={24}>
                  <use href={`${sprite}#${paymentMethod}`} />
                </svg>
                <button
                  type="button"
                  onClick={() => setPaymentMethod(undefined)}
                >
                  <svg width={18} height={18}>
                    <use href={`${sprite}#close`} />
                  </svg>
                </button>
              </HeaderDiv>
              <ModalMain>
                <UserDiv>
                  <img
                    src="src/images/photo.jpg"
                    alt="your photo"
                    width={60}
                    height={60}
                  />
                  <div>
                    <p>Тарас Шевченко</p>
                    <p>myemail@gmail.com</p>
                  </div>
                </UserDiv>
                <CardDiv>
                  <img
                    src="src/images/visa.png"
                    alt="visa and mastercard label"
                    width={card === 'visa' ? 50 : 21}
                    height={16}
                    style={{
                      objectPosition:
                        card === 'visa' ? 'right center' : 'left center',
                    }}
                  />
                  <p>{card === 'visa' ? 'Visa' : 'MasterCard'}********1111</p>
                </CardDiv>
                <form id="paymentSystems" onSubmit={submitHandle}>
                  <div>
                    <label>
                      <input type="checkbox" name="paymentSystemAd" />
                      Отримуйте від Google Pay електронні листи з екслюзивними
                      пропозиціями, порадами і запрошеннями на участь в
                      опитуваннях
                    </label>
                    <svg width={28} height={28}>
                      <use href={`${sprite}#i`} />
                    </svg>
                  </div>
                  <Button type="submit">підтвердити</Button>
                </form>
              </ModalMain>
            </Modal>
          )}
        </ContainerLimiter>
      </>
    )
  );
};
export default Payment;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageTitle } from '../../components/pageTitle/PageTitle';
import { ContainerLimiter } from '../../components/containerLimiter/ContainerLimiter';
import {
  DeliveryBox,
  Form,
  FlexContainer,
  Info,
  DeliveryPrice,
  Total,
  CustomTitle,
  PolicyLink,
} from './Delivery.styled';
// import sprite from '../../images/sprite.svg';

type Good = {
  images: [{ image: string }];
  name: string;
  price: number;
  length: number;
  id_name: string;
  quantity: number;
};

const Delivery = () => {
  const navigate = useNavigate();

  let goodsInCart: { id: string; amount: number }[] = [];

  if (localStorage.getItem('cart')) {
    goodsInCart = JSON.parse(localStorage.getItem('cart') as string);
    if (goodsInCart.length === 0) {
      navigate('/cart');
    }
  } else {
    navigate('/cart');
  }

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

  const [inCart] = useState<Good[]>(
    goodsInCartArray.filter((el: { length: number }) => el.length !== 0),
  );

  function getTotalPrice() {
    return inCart.reduce(
      (total: number, el: { quantity: number; price: number }) =>
        el.price * (el?.quantity ? el.quantity : 1) + total,
      0,
    );
  }

  function submitHandle(e: React.FormEvent) {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
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

    navigate('/payment');
    // e.form.reset();
  }
  return (
    inCart.length > 0 && (
      <>
        <PageTitle>Доставка</PageTitle>
        <ContainerLimiter paddingTopMob={'56px'} paddingTopDesc={'64px'}>
          <DeliveryBox>
            <Form onSubmit={submitHandle} id="delivery">
              <h2>Адреса доставки</h2>
              <FlexContainer>
                <label className="short">
                  Ім’я
                  <input
                    placeholder="Тарас"
                    name="name"
                    type="text"
                    className="short"
                    required
                  />
                </label>
                <label className="short">
                  Прізвище
                  <input
                    placeholder="Шевченко"
                    name="surname"
                    type="text"
                    className="short"
                    required
                  />
                </label>
                <label>
                  Країна
                  <select name="country" defaultValue="" required>
                    <option value="" disabled selected hidden>
                      Оберіть країну
                    </option>
                    <option value="ukr">Україна</option>
                    <option value="pol">Польща</option>
                  </select>
                </label>
                <label>
                  Регіон
                  <select name="oblast" defaultValue="" required>
                    <option value="" disabled selected hidden>
                      Оберіть регіон
                    </option>
                    <option value="ukr">Україна</option>
                    <option value="pol">Польща</option>
                  </select>
                </label>
                <label>
                  Місто
                  <select name="city" defaultValue="" required>
                    <option value="" disabled selected hidden>
                      Оберіть місто
                    </option>
                    <option value="ukr">Україна</option>
                    <option value="pol">Польща</option>
                  </select>
                </label>
                <label>
                  Служба доставки
                  <select name="post" defaultValue="" required>
                    <option value="" disabled selected hidden>
                      Оберіть службу доставки
                    </option>
                    <option value="novaposhta">Нова Пошта (1-3 днів)</option>
                    <option value="ukrpost">Укрпошта (3-12 днів)</option>
                  </select>
                </label>
                <label>
                  Номер відділення
                  <select name="office" defaultValue="" required>
                    <option value="" disabled selected hidden>
                      Оберіть номер відділення
                    </option>
                    <option value="novaposhta">Нова Пошта (1-3 днів)</option>
                    <option value="ukrpost">Укрпошта (3-12 днів)</option>
                  </select>
                </label>
                <label>
                  Вид оплати
                  <select name="payment" defaultValue="" required>
                    <option value="" disabled selected hidden>
                      Оберіть вид оплати
                    </option>
                    <option value="novaposhta">Оплата онлайн</option>
                    <option value="ukrpost">Оплата Готівкою</option>
                  </select>
                </label>
                <label>
                  Номер телефону
                  <input
                    placeholder="38067 123 4567"
                    name="phone"
                    type="tel"
                    required
                  />
                </label>
                <label>
                  Email
                  <input
                    placeholder="myemail@gmail.com"
                    name="email"
                    type="email"
                    required
                  />
                </label>
              </FlexContainer>
              <h3>Додаткова інформація</h3>
              <label>
                Коментар щодо замовлення (не обов’язково)
                <textarea placeholder="Напишіть щось" name="comment"></textarea>
              </label>
            </Form>
            <aside>
              <Info>
                <h3>Ваше замовлення</h3>
                <div>
                  <h4>Товар</h4>
                  <h4>Вартість</h4>
                </div>

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

                <DeliveryPrice>
                  <p>Вартість доставки</p>
                  <p>₴ 95</p>
                </DeliveryPrice>

                <Total>
                  <p>Загальна сума:</p>
                  <p>₴ {getTotalPrice() + 95}</p>
                </Total>

                <CustomTitle>Метод оплати</CustomTitle>
                <p>
                  Ви можете оплатити з допомогою кредитної/дебітної картки,
                  Apple Pay, Google Pay, а також готівкою.
                </p>
                <p>
                  Ваші особисті дані використовуватимуться для обробки вашого
                  замовлення, можливості користування цим веб-сайтом та для
                  інших цілей, описаних у нашій
                  <PolicyLink to={'./policy'}>
                    {' '}
                    політиці конфіденційності.
                  </PolicyLink>
                </p>
              </Info>

              <button type="submit" form="delivery">
                продовжити
              </button>
            </aside>
          </DeliveryBox>
        </ContainerLimiter>
      </>
    )
  );
};
export default Delivery;

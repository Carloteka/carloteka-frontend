import { PageTitle } from '../../components/pageTitle/PageTitle';
import { ContainerLimiter } from '../../components/containerLimiter/ContainerLimiter';
import {
  PaymentSection,
  DeliverySection,
} from './AboutPaymentAndDelivery.styled';
import sprite from '../../images/sprite.svg';
import paymentImg from '../../images/high-view-laptop-black-shopping-card-1x.jpg';

const AboutPaymentAndDelivery = () => {
  return (
    <>
      <PageTitle>Оплата та доставка</PageTitle>
      <ContainerLimiter paddingTopMob={'56px'} paddingTopDesc={'88px'}>
        <PaymentSection>
          <div>
            <h3>Оплата:</h3>
            <ol>
              <li>
                <h4>Оплата при отримані товару на пошті "післяплата": </h4>
                <p>
                  Ви оплачуєте товар при отриманні у відділенні Нової пошти. При
                  цьому з Вас стягується комісія за переказ коштів згідно
                  тарифів перевізника.
                </p>
              </li>
              <li>
                <h4>Оплата картою Visa, Mastercard - WayForPay: </h4>
                <p>
                  Вы оплачиваете товар через систему электронных банковских
                  платежей. Средства списываются с Вашей карты и зачисляются на
                  наш счёт. Комиссия составляет 0,5% от стоимости товара.
                </p>
              </li>
              <li>Оплата за реквізитами.</li>
            </ol>
          </div>
          <img
            src={paymentImg}
            alt="black laptop and shopping card"
            width={640}
            height={426}
          />
        </PaymentSection>
        <DeliverySection>
          <h3>Доставка:</h3>
          <details>
            <summary>
              <svg width={38} height={38}>
                <use href={`${sprite}#novaposhta`} />
              </svg>
              <p>Детальніше про оплату</p>
              <svg width={24} height={24}>
                <use href={`${sprite}#chevronRound`} />
              </svg>
            </summary>
            <ol>
              <li>
                При оформленні замовлення необхідно вибрати товар і вказати
                зручний відділення «Нової пошти».
              </li>
              <li>
                Далі вибір зручного способу оплати - готівкою оператору при
                отриманні, банківською картою на сайті, безготівковим
                перерахунком коштів по рахунку.
              </li>
              <li>
                До замовлення ви можете додати коментарі, наприклад, вказати
                додаткову інформацію про замовлення, колір необхідного товару з
                асортименту, зручний час доставки та інші дані.
              </li>
              <li>
                Після оформлення замовлення Вам прийде sms-повідомлення про
                комплектацію замовлення і номер декларації для відстеження
                надсилання. За номером декларації статус доставки можна
                перевірити на сайті «Нова пошта».{' '}
              </li>
              <li>
                Детальніше ви можете ознайомитися з інформацією про отримання
                товарів у відділенні «Нова пошта» за посиланням
                https://novaposhta.ua/ru/poluchit_s_otdeleniya.{' '}
              </li>
              <li>
                У момент отримання посилки перед здійсненням оплати замовлення
                готівковим способом перевірте товар на його цілісність і
                наявність дефектів. При виявленні механічних пошкоджень на товар
                (тріщин, сколів, вм'ятин і т. д.) або його повної
                непрацездатності, вам необхідно зателефонувати в
                інтернет-магазин 0 (800) 306-063 і повідомити про це оператору,
                який вас проконсультує з приводу даної ситуації і допоможе
                оформити повторне замовлення. Докладніше:
                https://antoshka.ua/ua/delivery
              </li>
            </ol>
          </details>
          <details>
            <summary>
              <svg width={40} height={40}>
                <use href={`${sprite}#ukrposhta`} />
              </svg>
              <p>Детальніше про оплату</p>
              <svg width={24} height={24}>
                <use href={`${sprite}#chevronRound`} />
              </svg>
            </summary>
            <ol>
              <li>
                При оформленні замовлення необхідно вибрати товар і вказати
                зручний відділення «Нової пошти».
              </li>
              <li>
                Далі вибір зручного способу оплати - готівкою оператору при
                отриманні, банківською картою на сайті, безготівковим
                перерахунком коштів по рахунку.
              </li>
              <li>
                До замовлення ви можете додати коментарі, наприклад, вказати
                додаткову інформацію про замовлення, колір необхідного товару з
                асортименту, зручний час доставки та інші дані.
              </li>
              <li>
                Після оформлення замовлення Вам прийде sms-повідомлення про
                комплектацію замовлення і номер декларації для відстеження
                надсилання. За номером декларації статус доставки можна
                перевірити на сайті «Нова пошта».{' '}
              </li>
              <li>
                Детальніше ви можете ознайомитися з інформацією про отримання
                товарів у відділенні «Нова пошта» за посиланням
                https://novaposhta.ua/ru/poluchit_s_otdeleniya.{' '}
              </li>
              <li>
                У момент отримання посилки перед здійсненням оплати замовлення
                готівковим способом перевірте товар на його цілісність і
                наявність дефектів. При виявленні механічних пошкоджень на товар
                (тріщин, сколів, вм'ятин і т. д.) або його повної
                непрацездатності, вам необхідно зателефонувати в
                інтернет-магазин 0 (800) 306-063 і повідомити про це оператору,
                який вас проконсультує з приводу даної ситуації і допоможе
                оформити повторне замовлення. Докладніше:
                https://antoshka.ua/ua/delivery
              </li>
            </ol>
          </details>
        </DeliverySection>
      </ContainerLimiter>
    </>
  );
};
export default AboutPaymentAndDelivery;

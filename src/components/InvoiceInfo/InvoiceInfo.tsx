import {
  InfoBox,
  DeliveryPrice,
  Total,
  PolicyLink,
} from './InvoiceInfo.styled';
import { Good } from '../../../@types/custom';
// import { getTotalPrice } from '../../utils';

interface InvoiceInfoProps {
  inCart: Good[];
  total: number;
}

export const InvoiceInfo = ({ inCart, total }: InvoiceInfoProps) => {
  return (
    <InfoBox>
      <h3>Ваше замовлення</h3>
      <div>
        <h4>Товар</h4>
        <h4>Вартість</h4>
      </div>

      <ul>
        {inCart?.map((el) => (
          <li key={el.id}>
            <div>
              <p>
                {el.name}
                {el.quantity > 1 && ` (${el.quantity} шт.)`}
              </p>
              <p>₴ {el.price * (el?.quantity ? el.quantity : 1)}</p>
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
        <p>₴ {(total + 95).toFixed(2)}</p>
      </Total>

      <h3>Метод оплати</h3>
      <p>
        Ви можете оплатити з допомогою кредитної/дебітної картки, Apple Pay,
        Google Pay, а також готівкою.
      </p>
      <p>
        Ваші особисті дані використовуватимуться для обробки вашого замовлення,
        можливості користування цим веб-сайтом та для інших цілей, описаних у
        нашій
        <PolicyLink to={'./policy'}> політиці конфіденційності.</PolicyLink>
      </p>
    </InfoBox>
  );
};

import { PageTitle } from '../../components/pageTitle/PageTitle';
import { ContainerLimiter } from '../../components/containerLimiter/ContainerLimiter';
import { PrivacyPolicy } from './Refund.styled';
import { PolicyBox } from '../Policy/Policy.styled';
import { PopularGoods } from '../../components/popularGoods';

const Refund = () => {
  return (
    <>
      <PageTitle>Повернення & Відшкодування</PageTitle>
      <ContainerLimiter paddingTopMob={'56px'} paddingTopDesc={'88px'}>
        <PolicyBox>
          <PrivacyPolicy>
            <h3>Умови обміну та повернення:</h3>
            <p>
              Згідно з постановою Кабінету Міністрів України від 23 вересня 1991
              р. N 216 гарантія не поширюється:
            </p>
            <ul>
              <li>На предмети особистої гігієни.</li>
              <li>білизну.</li>
              <li>чулочно- шкарпеткові вироби.</li>
              <li>пухові вироби.</li>
              <li>друковані видання.</li>
              <li>Дитячі м'які, надувні і гумові іграшки.</li>
              <li>
                товари для немовлят (пелюшки, пустишки, пляшечки для годування
                тощо)
              </li>
            </ul>
            <h3>Повернення або обмін товару можливий в тому випадку, якщо:</h3>
            <ul>
              <li>
                товар має дефекти (провина виробника) або виявився несправний
                (несправність виявлена перед початком експлуатації).
              </li>
              <li>товар не був у використанні (є новим).</li>
              <li>
                Збережений товарний вид (відсутні подряпини, відколи, потертості
                і т.д.).
              </li>
              <li>
                Збережено ярлики, захисні пломби, упаковка, документи, товарний
                чек.
              </li>
              <li>
                Відсутні ознаки механічного втручання (механічне втручання,
                спроби самостійного ремонту).
              </li>
              <li>
                Відсутність механічного пошкодження, заміна деталей і т.д.
                (порушення гарантійного обслуговування).
              </li>
              <li>
                При наявності повної комплектації товару. В окремих випадках
                можливі варіанти відмінності комплектації від зазначеної в
                керівництві, так як іноді виробник змінює її без повідомлення та
                без позначки в керівництві.
              </li>
              <li>
                У разі, коли товар не підійшов за формою, кольором, габаритами,
                фасоном і розмірами.
              </li>
              <li>У разі, якщо доставлений товар не відповідає замовленню.</li>
            </ul>
            <p>
              Згідно ч. 3 статті 9. Закону України "Про захист прав споживачів"
              при поверненні грошей за товар розрахунки з покупцем проводяться
              тільки виходячи з вартості товару на момент його покупки,
              зазначеної в розрахунковому чеку. Гроші повертаються Покупцю в
              день пред'явлення відповідної вимоги (в письмовій формі, вказуючи
              причину повернення), а в разі неможливості повернення грошей в цей
              день - в інший строк за домовленістю сторін, але не пізніше 7
              (сім) робочих днів з моменту письмового пред'явлення вимоги.
              Згідно п.6 ст.8 ЗУ «Про захист прав споживачів» максимальний
              термін перевірки товару становить 14 днів.
            </p>
          </PrivacyPolicy>
          <div>
            <PopularGoods width={1} />
          </div>
        </PolicyBox>
      </ContainerLimiter>
    </>
  );
};
export default Refund;

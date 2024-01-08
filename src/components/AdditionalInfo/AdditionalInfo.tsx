import { SectionAdditionalInfo } from './AdditionalInfo.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItemDetails } from '../../api/api';
import sprite from '../../images/sprite.svg';

type Good = {
  height: number;
  width: number;
};

const AdditionalInfo = () => {
  const { goodId } = useParams();

  const [good, setGood] = useState<Good>();

  useEffect(() => {
    async function getGoodDetail() {
      try {
        const data = await fetchItemDetails(goodId);
        setGood(data);
      } catch (error) {
        console.log(error);
      }
    }
    getGoodDetail();
  }, [goodId]);

  return (
    good && (
      <SectionAdditionalInfo>
        <table>
          <tbody>
            <tr>
              <td>Матеріал</td>
              <td>Дерево, вкрите коричневим лаком, найвищого рівня якості</td>
            </tr>
            <tr>
              <td>Висота</td>
              <td>{good.height} см</td>
            </tr>
            <tr>
              <td>Діаметр</td>
              <td>{good.width} см</td>
            </tr>
            <tr>
              <td>Країна-виробник товару</td>
              <td>Україна</td>
            </tr>
          </tbody>
        </table>

        <details>
          <summary>
            <h3>Доставка</h3>
            <svg width={24} height={24}>
              <use href={`${sprite}#chevronRound`} />
            </svg>
          </summary>
          <table>
            <tbody>
              <tr>
                <td>Нова Пошта</td>
                <td>від 40 грн</td>
              </tr>
              <tr>
                <td>Укрпошта Стандарт</td>
                <td>від 25 грн</td>
              </tr>
              <tr>
                <td>Кур'єром</td>
                <td>від 35 грн</td>
              </tr>
            </tbody>
          </table>
        </details>
      </SectionAdditionalInfo>
    )
  );
};
export default AdditionalInfo;

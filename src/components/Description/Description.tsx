import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItemDetails } from '../../api/api';

const Description = () => {
  const { goodId } = useParams();

  const [good, setGood] = useState();

  useEffect(() => {
    async function getGoodDetail() {
      try {
        const data = await fetchItemDetails(goodId);
        console.log(data);
        setGood(data);
      } catch (error) {
        console.log(error);
      }
    }
    getGoodDetail();
  }, [goodId]);

  return (
    good && (
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          borderTop: '1px solid #A7A5A3',
          paddingTop: '40px',
        }}
      >
        <div>
          <h4 style={{ marginBottom: '12px' }}>{good.name}</h4>
          <p>
            це чудовий спосіб надати вашому інтер'єру природний та органічний
            вигляд. Виготовлена з високоякісного дерева, вона має унікальну
            текстуру та природні відтінки, що роблять кожну вазу особливою. Ця
            ваза відмінно підходить для розміщення квітів, гілок, або інших
            декоративних елементів, створюючи теплу та затишну атмосферу в
            вашому приміщенні. Вона стане чудовим акцентом в вашому домі та
            прикрасить будь-який інтер'єр.
          </p>
        </div>
        <img
          src={
            import.meta.env.PROD
              ? `/${good.images[0].image}`
              : `http://localhost:8000/${good.images[0].image}`
          }
          alt={good.name}
          width={528}
          height={528}
        ></img>
      </section>
    )
  );
};

export default Description;

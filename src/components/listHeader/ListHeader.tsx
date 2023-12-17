import { Wrapper, Name, Price, Quantity } from './ListHeader.styled';

export const ListHeader = () => {
  return (
    <Wrapper>
      <Name>Товар</Name>
      <Price>Ціна</Price>
      {location.pathname.includes('favorites') && (
        <p>Рейтинг товару та відгуки</p>
      )}
      {location.pathname.includes('cart') && (
        <>
          <Quantity>Кількість</Quantity>
          <p>Загальна вартість</p>
        </>
      )}
    </Wrapper>
  );
};

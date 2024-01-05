import styled from 'styled-components';

export const SectionInfo = styled.section`
  margin-bottom: 88px;
  display: flex;
  align-items: center;
  gap: 32px;

  & > div:first-child {
    width: 640px;
    height: 745px;
    display: flex;
    align-items: center;
  }
`;

export const SellDiv = styled.div`
  width: 488px;

  & > div {
    margin-bottom: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  & > div > div {
    margin: 0;
    padding: 12px 16px;
    width: 155px;
    height: 48px;
    border: 1px solid #81807e;

    span {
      font-weight: 400;
      line-height: calc(25 / 18);
    }
  }

  span {
    font-size: 18px;
    font-weight: 700;
    line-height: calc(23 / 18);
  }

  a {
    width: 100%;
    height: 48px;
    color: white;
    background-color: #2d3f24;
    text-transform: uppercase;
    order: 5;
  }
`;

export const Price = styled.p`
  margin: 16px 0 40px;
`;

export const Material = styled.p`
  margin: 24px 0 40px;
`;

export const AddToCartBtn = styled.button`
  width: 251px;
  text-transform: uppercase;
  border: 1px solid #2d3f24;
  color: #2d3f24;
  order: 3;
`;
export const AddToFavoriteBtn = styled.button`
  width: 50px;
  border: 1px solid #81807e;
  color: #2d3f24;
  order: 4;
`;

export const AdditionalNavigation = styled.ul`
  display: flex;
  margin-bottom: 24px;
  gap: 14px;

  .active {
    color: #cccbc7;
  }
`;

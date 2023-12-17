import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 8px;
  display: flex;
  width: 100%;
  text-align: start;
  background-color: #dad4c8;
  @media screen and (min-width: 1440px) {
    padding: 12px 112px;
  }
`;

export const Name = styled.p`
  margin-right: 22px;
  @media screen and (min-width: 1440px) {
    margin-right: 508px;
  }
`;

export const Price = styled.p`
  margin-right: 20px;
  @media screen and (min-width: 1440px) {
    margin-right: 74px;
  }
`;

export const Quantity = styled.p`
  margin-right: 20px;
  @media screen and (min-width: 1440px) {
    margin-right: 79px;
  }
`;

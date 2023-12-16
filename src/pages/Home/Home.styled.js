import styled from 'styled-components';

export const LimiterConatiner = styled.div`
  margin: 0 auto;
  width: 288px;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 960px;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
    width: 1312px;
  }
`;

export const CategorySection = styled.section`
  margin-bottom: 55px;
  padding: 40px 0 0;
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
    padding: 88px 0;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 56px;
  @media screen and (min-width: 1440px) {
    gap: 72px;
  }
`;

export const Category = styled.li`
  display: flex;
  gap: 32px;
  @media screen and (max-width: 1439.99px) {
    flex-direction: column;
    gap: 24px;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  & > div:first-child {
    display: none;
    @media screen and (min-width: 1440px) {
      display: block;
    }
  }
`;

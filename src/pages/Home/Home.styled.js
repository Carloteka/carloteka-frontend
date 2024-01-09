import styled from 'styled-components';

export const CategorySection = styled.section`
  margin-bottom: 55px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
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
  @media screen and (max-width: 1439px) {
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

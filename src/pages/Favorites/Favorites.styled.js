import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListHeaderWrapper = styled.div`
  padding: 8px;
  width: 100%;
  display: flex;
  text-align: start;
  background-color: #dad4c8;
  @media screen and (min-width: 1440px) {
    padding: 12px 24px 12px 112px;
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

export const FavoritesList = styled.ul`
  padding: 0 0 32px;
  width: 100%;
  border-bottom: 1px solid #dad4c8;

  @media screen and (min-width: 1440px) {
    padding: 0 0 56px;
    border-bottom: none;
  }

  li {
    display: flex;
    align-items: center;
  }
`;

export const Card = styled.li`
  @media screen and (max-width: 1439px) {
    align-items: flex-start;
  }
  padding: 32px 0;
  flex-wrap: wrap;
  border-bottom: 1px solid #dad4c8;
`;

export const Button = styled.button`
  margin-left: auto;

  @media screen and (min-width: 1440px) {
    width: 416px;
  }
`;

export const EmptyMessage = styled.div`
  margin: 24px auto 0;
  width: 100%;
  text-align: center;

  @media screen and (min-width: 1440px) {
    margin: 56px auto 0;
    width: 542px;
  }

  h2 {
    margin: 16px 0;
    @media screen and (min-width: 1440px) {
      margin: 32px 0;
    }
  }

  & > a {
    margin: 0 auto;
    height: 48px;
  }

  & > svg {
    fill: #101010;
    @media screen and (min-width: 1440px) {
      width: 248px;
      height: 248px;
    }
  }
`;

export const GoToCatalog = styled(Link)`
  margin: 0 auto;
  padding: 14.5px 8px;

  // justify-content: flex-start;

  @media screen and (min-width: 834px) {
    margin: 0;
    padding: 14.5px 24px;
    width: 328px;
  }
  @media screen and (min-width: 1440px) {
    width: 415px;
  }

  & > svg {
    margin-right: 8px;
    fill: white;
    transform: rotate(180deg);
    @media screen and (min-width: 1440px) {
      margin-right: 49px;
    }
  }
`;

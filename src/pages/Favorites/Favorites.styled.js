import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  margin-left: auto;
  padding: 5px 24px;
  text-transform: uppercase;
  color: #2d3f24;
  border: 1px solid #2d3f24;
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
  width: 100%;
  justify-content: flex-start;
  color: white;
  font-weight: 500;
  background-color: #2d3f24;
  text-transform: uppercase;

  @media screen and (min-width: 1440px) {
    padding: 14.5px 24px;
    width: 418px;
  }

  & > svg {
    margin-right: 8px;
    fill: white;
    transform: rotate(180deg);
    @media screen and (min-width: 1440px) {
      margin-right: 49px;
    }
  }

  &:visited {
    color: white;
  }
`;

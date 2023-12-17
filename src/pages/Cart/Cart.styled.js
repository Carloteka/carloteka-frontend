import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  margin-left: auto;
  padding: 5px 24px;
  width: 100%;
  height: 48px;
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

// unique cart styles

export const GoToCatalog = styled(Link)`
  margin: 0;
  padding: 14.5px 8px;
  width: 100%;
  height: 48px;
  justify-content: flex-start;
  color: #2d3f24;
  font-weight: 500;
  border: 1px solid #2d3f24;
  text-transform: uppercase;

  @media screen and (min-width: 1440px) {
    padding: 14.5px 24px;
    width: 415px;
  }

  & > svg {
    margin-right: 8px;
    fill: #2d3f24;
    transform: rotate(180deg);
    @media screen and (min-width: 1440px) {
      margin-right: 49px;
    }
  }

  &:visited {
    color: #2d3f24;
  }
`;

export const FlexBox = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const FlexContainer = styled.div`
  margin: 24px auto 0;

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    margin: 112px auto 0;
  }
`;
export const CouponBox = styled.form`
  width: 100%;
  @media screen and (min-width: 1440px) {
    width: 528px;
  }

  & > label {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 40px 0 32px;
  }

  .width_full {
    width: 100%;
  }

  & input {
    padding: 0 0 0 24px;
    height: 50px;
    border: 1px solid #81807e;
  }
  & input::placeholder {
    color: #a7a5a3;
  }
`;
export const BuyBox = styled.div`
  width: 100%;
  @media screen and (min-width: 1440px) {
    width: 528px;
  }

  & > div {
    position: relative;
    margin-bottom: 56px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 136px;
    font-size: 20px;
    line-height: calc(25 / 20);
    background-color: #f2f0ec;
    border: 1px solid #cccbc7;
    @media screen and (max-width: 1439.99px) {
      font-size: 18px;
      line-height: calc(23 / 18);
    }
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      width: 88%;
      height: 1px;
      background-color: #a7a5a3;
    }
  }

  & > div > div {
    display: flex;
    justify-content: space-between;
    & > p:first-child {
      font-weight: 700;
      line-height: calc(23 / 18);
    }
  }
`;

export const GoToPayment = styled(Link)`
  padding: 14.5px 8px;
  width: 100%;
  height: 48px;
  justify-content: flex-end;
  color: white;
  background-color: #2d3f24;
  font-weight: 500;
  border: 1px solid #2d3f24;
  text-transform: uppercase;

  @media screen and (min-width: 1440px) {
    padding: 14.5px 24px;
  }

  & > svg {
    margin-left: 20px;
    fill: white;
    @media screen and (min-width: 1440px) {
      margin-left: 135px;
    }
  }

  &:visited {
    color: #2d3f24;
  }
`;

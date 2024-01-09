import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { visuallyHidden } from 'src/visuallyHiddenStyle';

export const HeaderContainer = styled.header`
  padding: 16px;

  width: 100%;
  height: 133px;
  background-color: #dad4c8;

  @media screen and (min-width: 1440px) {
    padding: 0 64px;
    height: 112px;
  }
`;

export const LimiterConatiner = styled.div`
  margin: 0 auto;
  width: 288px;
  height: 100%;
  display: flex;
  align-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (min-width: 1024px) {
    width: 960px;
  }

  @media screen and (min-width: 1440px) {
    width: 1312px;
    flex-wrap: nowrap;
  }
`;

export const Logo = styled(Link)`
  margin-right: 188px;
  background: #2d3f24;
  min-width: 60px;
  max-width: 60px;
  height: 60px;
  color: #dad4c8;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0;
  @media screen and (min-width: 1440px) {
    margin-right: 182px;
    min-width: 80px;
    height: 80px;
    word-spacing: -4px;
    font-size: 14px;
    line-height: calc(21 / 14);
  }
  &:visited {
    color: #dad4c8;
  }
`;

export const Catalog = styled(NavLink)`
  @media screen and (max-width: 1439px) {
    ${visuallyHidden};
  }
  margin-right: 80px;
  color: #101010;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  gap: 116px;

  button {
    width: 40px;
    height: 40px;
  }

  svg {
    fill: #101010;
  }
  @media screen and (min-width: 1440px) {
    justify-content: flex-end;
    width: 368px;
  }
`;

export const NavigationLink = styled(NavLink)`
  width: 40px;
  height: 40px;
  @media screen and (max-width: 1439px) {
    ${visuallyHidden};
  }
`;

export const BurgerMenuBtn = styled.button`
  @media screen and (max-width: 1439px) {
    justify-content: flex-end;
  }
`;

export const CartMenuBtn = styled.button`
  position: relative;

  @media screen and (max-width: 1439px) {
    ${visuallyHidden};
  }
`;

export const CartCounter = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -10px;
  right: -20px;
  width: 25px;
  height: 25px;
  font-weight: 400;
  font-size: 13px;
  line-height: calc(20 / 13);
  border-radius: 50%;
  color: #f2f0ec;
  background-color: #2d3f24;
`;

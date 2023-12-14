import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  padding-inline: 32px;

  width: 100%;
  height: 133px;
  background-color: #dad4c8;

  @media screen and (min-width: 1440px) {
    padding-inline: 64px;
    height: 112px;
  }
`;

export const LimiterConatiner = styled.div`
  margin: 0 auto;
  width: 288px;
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 960px;
  }

  @media screen and (min-width: 1440px) {
    width: 1312px;
  }
`;

export const Logo = styled(Link)`
  margin-right: 182px;
  background: #2d3f24;
  width: 60px;
  height: 60px;
  color: #dad4c8;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (min-width: 1440px) {
    width: 80px;
    height: 80px;
    font-size: 14px;
    line-height: calc(21 / 14);
    letter-spacing: 1px;
  }
`;

export const Catalog = styled(NavLink)`
  margin-right: 80px;
  color: #101010;
`;

export const Search = styled.form`
  margin-right: 142px;
  padding: 0 16px;
  height: 32px;
  display: flex;
  align-items: center;

  &:focus-within {
    background: #fff;
  }
  // border-bottom: 1px solid #363535;

  input {
    padding-right: 16px;
    width: 366px;
    border: none;
    border-radius: 0;
    background-color: inherit;
    color: #101010;
  }
  input:focus {
    outline: none;
  }
`;
export const Actions = styled.div`
  width: 368px;
  display: flex;
  align-items: center;
  gap: 100px;

  button {
    width: 40px;
    height: 40px;
  }

  svg {
    fill: #101010;
  }
`;

export const NavigationLink = styled(NavLink)`
  textdecoration: 'none';
`;

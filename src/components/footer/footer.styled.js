import styled from 'styled-components';

export const FooterMainBlock = styled.footer``;

export const FooterEmailBlock = styled.div`
  background-color: #dad4c8;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 88px 0px 109px;

  h2 {
    color: #101010;
    font-size: 55px;
    line-height: calc(63 / 55);
  }
  p {
    margin: 40px 0;
    color: #101010;
    font-size: 17px;
    line-height: calc(21 / 17);
  }
`;

export const EmailBlock = styled.form`
  position: relative;
  display: flex;
  gap: 32px;

  input {
    padding: 12px 14px 16px 62px;
    width: 528px;
    height: 48px;
    color: #81807e;
    background-color: white;
  }
  input:focus {
    outline: none;
  }

  svg {
    position: absolute;
    top: 14px;
    left: 8px;
    fill: #81807e;
    @media screen and (min-width: 1440px) {
      left: 32px;
    }
  }

  button {
    background-color: #2d3f24;
    color: white;
    height: 48px;
    width: 231px;
  }
`;

export const MainFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 222px;
  background-color: #2d3f24;
  color: white;
  padding: 80px;

  div:first-child {
    width: 226px;
  }

  h3 {
    margin-bottom: 16px;
    @media screen and (min-width: 1440px) {
      margin-bottom: 24px;
    }
  }

  address {
    font-style: inherit;
  }

  li {
    display: flex;
    gap: 8px;
  }

  svg {
    fill: white;
    min-width: 20px;
    width: 20px;
    height: 20px;
  }
  a {
    color: inherit;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Socials = styled.ul`
  display: flex;
  gap: 16px;
  height: 24px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

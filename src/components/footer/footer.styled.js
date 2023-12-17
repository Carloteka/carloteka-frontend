import styled from 'styled-components';

export const FooterMainBlock = styled.footer``;

export const FooterEmailBlock = styled.div`
  position: relative;
  padding: 40px 16px;
  text-align: center;
  background-color: #dad4c8;
  z-index: -1;

  @media screen and (min-width: 1440px) {
    padding: 88px 0px 109px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    @media screen and (min-width: 1440px) {
      font-size: 55px;
      line-height: calc(63 / 55);
    }
  }
  p {
    margin: 24px 0;
    font-size: 17px;
    line-height: calc(21 / 17);
    @media screen and (min-width: 1440px) {
      margin: 40px 0;
    }
  }
`;

export const EmailBlock = styled.form`
  position: relative;
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 32px;
  }

  input {
    margin-bottom: 16px;
    padding: 12px 14px 16px 36px;
    width: 100%;
    height: 48px;
    color: #81807e;
    background-color: white;
    @media screen and (min-width: 1440px) {
      margin-bottom: 0;
      padding: 12px 14px 16px 62px;
      width: 528px;
    }
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
    width: 100%;
    @media screen and (min-width: 1440px) {
      width: 231px;
    }
  }
`;

export const MainFooter = styled.div`
  padding: 46px 16px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  background-color: #2d3f24;
  color: white;
  @media screen and (min-width: 1440px) {
    padding: 80px;
    flex-direction: row;
    gap: 222px;
  }

  div:first-child {
    width: 226px;
  }

  h3 {
    margin-bottom: 16px;
    @media screen and (min-width: 1440px) {
      margin-bottom: 24px;
    }
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

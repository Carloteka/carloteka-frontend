import styled from 'styled-components';

export const GreetingContainer = styled.section`
  padding: 16px;
  display: flex;
  justify-content: center;
  width: 100%;

  // flex-shrink: 0;
  background: #dad4c8;
  @media screen and (min-width: 1440px) {
    padding: 71px 64px;
    height: 788px;
  }
`;
export const Box = styled.div`
  width: 288px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 1440px) {
    width: 1312px;
    height: 646px;
    flex-direction: row;
    text-align: start;
  }

  & > div {
    @media screen and (max-width: 1439.99px) {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }
`;
export const Img = styled.img`
  display: none;
  @media screen and (max-width: 1439.99px) {
    width: 100%;
    display: block;
  }
`;
export const ImgAside = styled.img`
  display: block;
  @media screen and (max-width: 1439.99px) {
    display: none;
  }
`;
export const Title = styled.h1`
  @media screen and (max-width: 1439.99px) {
    width: 288px;
    font-size: 35px;
    line-height: calc(46 / 35);
  }
  width: 640px;
`;

export const Description = styled.p`
  margin: 0;
  width: 100%;
  color: #363535;
  font-size: 19px;
  font-weight: 500;
  line-height: 23px;

  @media screen and (min-width: 1440px) {
    margin: 56px 0 40px;
    width: 640px;
  }
`;
export const Button = styled.button`
  position: relative;
  background-color: #2d3f24;
  color: white;
  width: 100%;
  height: 48px;
  text-transform: uppercase;

  @media screen and (min-width: 1440px) {
    width: 304px;
  }

  svg {
    position: absolute;
    right: 24px;
    top: 16px;
    fill: white;
  }
`;

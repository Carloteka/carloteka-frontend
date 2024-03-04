import styled from 'styled-components';

export const ThumbPhoto = styled.div`
  position: relative;

  &:hover {
    div {
      display: flex;
    }
  }

  img {
    object-fit: cover;
    background-color: #dad4c8;
    height: 304px;

    @media screen and (min-width: 834px) {
      width: 240px;
      height: 280px;
    }
    @media screen and (min-width: 1440px) {
      width: 304px;
      height: 304px;
    }
  }

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    width: 116px;
    height: 50px;
    display: none;
    gap: 16px;
    z-index: 1;
  }

  p {
    padding-left: 4px;
    position: absolute;
    top: 13px;
    left: 16px;
    width: 148px;
    height: 24px;
    display: flex;
    align-items: center;
    font-size: 13px;
    line-height: calc(20 / 13);
    color: white;
    background-color: #b4a525;
  }
`;

export const Name = styled.h4`
  margin: 16px 0;

  @media screen and (min-width: 834px) {
    margin: 16px 0 8px;
  }
  @media screen and (min-width: 1440px) {
    margin: 16px 0 24px;
  }
`;

export const Button = styled.button`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;

  svg {
    width: 24px;
    height: 22px;
  }

  &:hover {
    box-shadow: 1px 1px 7px 0 rgba(218, 212, 200, 70%);
  }
`;

export const Div = styled.div`
  margin-top: auto;
  color: #5b5b59;

  p {
    color: #000;
    @media screen and (min-width: 1440px) {
      color: #101010;
    }
    &::first-letter {
      color: #5b5b59;
    }
  }
`;

export const FlexContainer = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: stretch;
  gap: 16px;
  justify-content: center;

  @media screen and (min-width: 834px) {
    justify-content: flex-start;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 16px;
  }

  ul {
    display: flex;
    gap: 8px;
    li {
      width: 16px;
      height: 15px;
    }
  }
`;

export const Star = styled.svg`
  width: 16px;
  height: 15px;
  stroke: #5b5b59;
`;

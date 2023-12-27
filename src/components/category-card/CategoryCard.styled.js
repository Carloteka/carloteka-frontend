import styled from 'styled-components';

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  @media screen and (min-width: 1440px) {
    width: 640px;
    gap: 32px;
  }

  & > div {
    display: block;
    @media screen and (min-width: 1440px) {
      display: none;
    }
  }

  & > button {
    padding: 13.5px 24px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 19px;
    font-weight: 500;
    line-height: 1;
    text-transform: uppercase;
    border: 1px solid #2d3f24;
    color: #2d3f24;

    @media screen and (min-width: 1440px) {
      width: 304px;
    }
  }

  & > p {
    color: #363535;
  }

  & > li {
    display: flex;
  }
`;

export const Title = styled.h2`
  position: relative;
  padding: 0 0 8px 0;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    background: #dad4c8;
    width: 91px;
    height: 2px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 32px 4px 0;
    &:after {
      width: 192px;
      left: 0;
      transform: translateX(0%);
    }
  }
`;

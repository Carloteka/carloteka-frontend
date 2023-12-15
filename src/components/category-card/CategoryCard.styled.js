import styled from 'styled-components';

export const TextContainer = styled.div`
  width: 640px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  @media screen and (min-width: 1440px) {
    gap: 32px;
  }

  button {
    padding: 13.5px 24px;
    width: 304px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 19px;
    font-weight: 500;
    line-height: 1;
    text-transform: uppercase;
    border: 1px solid #2d3f24;
    color: #2d3f24;
  }

  p {
    color: #363535;
  }
`;

export const Title = styled.h2`
  position: relative;
  padding: 0 32px 4px 0;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    background: #dad4c8;
    width: 192px;
    height: 2px;
  }
`;

import styled from 'styled-components';

export const ThumbPhoto = styled.div`
  position: relative;
  @media screen and (min-width: 1440px) {
    margin-bottom: 16px;
  }

  &:hover {
    div {
      display: flex;
    }
  }

  img {
    object-fit: cover;
    height: 304px;
    background-color: #dad4c8;
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
  }
`;
export const Button = styled.button`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  background-color: ${({ press }) => (press ? `#2D3F24` : `white`)};

  svg {
    width: 24px;
    height: 22px;
    stroke: ${({ press }) => (press ? `white` : `#101010`)};
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
  align-items: center;
  gap: 16px;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    margin-bottom: 16px;
    justify-content: flex-start;
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
width:16px;
height:15px;
stroke:#5B5B59;
fill: ${({ rate }) => (rate ? `#5B5B59` : `transparent`)}}  ;
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 78px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #dad4c8;
  @media screen and (min-width: 1440px) {
    height: 224px;
  }
`;

export const Title = styled.h1`
  padding: 10px 16px;
  width: 320px;
  text-align: center;

  @media screen and (min-width: 1440px) {
    padding: 0 176px;
    width: 1440px;
    text-align: left;
  }
`;

import styled from 'styled-components';

export const Section = styled.section`
  & > div:first-of-type {
    display: none;
    @media screen and (min-width: 1440px) {
      display: block;
    }
  }
  & > div:last-child {
    display: block;
    @media screen and (min-width: 1440px) {
      display: none;
    }
  }
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;

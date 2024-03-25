import styled from 'styled-components';

export const Wrapper = styled.footer`
  padding: 46px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 40px;
  background-color: #2d3f24;
  color: white;

  @media screen and (min-width: 834px) {
    padding: 56px 33px 31px;
    flex-direction: row;
    gap: 34px;
  }
  @media screen and (min-width: 1440px) {
    padding: 57px 163px;
      justify-content: space-between;
  }

  div:first-child {
    width: 226px;
  }
  div:nth-child(2) {
    @media screen and (max-width: 1439px) {
      width: 216px;
    }
  }
  div:last-child {
    width: 184px;
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

export const WorkTime = styled.p`
width:236px
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

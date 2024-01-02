import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuContainer = styled.div`
  padding: 130px 18px 180px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 72px;
  background-color: white;
  z-index: 2;
  @media screen and (min-width: 1440px) {
    padding: 112px;
    width: 592px;
    min-height: 1024px;
  }
  a {
    justify-content: flex-start;
  }

  @media screen and (max-width: 1439.99px) {
    h3 {
      font-size: 24px;
      line-height: calc(31 / 24);
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 65px;
  left: 16px;

  svg {
    stroke: #101010;
  }

  @media screen and (min-width: 1440px) {
    top: 56px;
    left: 56px;
  }
`;

export const FlexContainer = styled.div`
@media screen and (max-width: 1439.99px) {
      flex-direction: column;
      row-gap:24px;
    }

  display: flex; 
  justify-content: space-between;

  h3 {
    margin-bottom:16px;
      font-size: 20px;
  line-height: calc(27 / 20);
   
  }

  button:first-of-type {
    margin-bottom:8px;  
  }

    button {  
  font-weight: 400;
  font-size: 18px;
  line-height: calc(25 / 18);
    color: #5B5B59;
  }

  button:disabled {
    color:#101010;
    cursor:auto;
  }
}

`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const FlexCatalogContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 32px;

  button {
    width: 24px;
    height: 24px;
    justify-content: center;
  }

  svg {
    fill: #101010;
  }
`;

export const CategoriesList = styled.ul`
  padding: 16px 16px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  li {
    width: 352px;
  }
`;
export const LinkLarge = styled(Link)`
  font-size: 24px;
  font-weight: 700;
  line-height: calc(31 / 24);
`;

export const Contacts = styled.div`
  h3 {
    margin-bottom: 10px;
  }
  li {
    margin-bottom: 9px;
  }
`;

export const Tel = styled.li`
  margin-bottom: 13px;
  color: #2d3f24;
  a {
    font-weight: 400;
    font-size: 18px;
    line-height: calc(25 / 18);
    color: #2d3f24;
  }
`;

export const Socials = styled.ul`
  display: flex;
  gap: 16px;
  height: 24px;

  svg {
    fill: #2d3f24;
  }
`;

import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export const Search = styled.form`
  margin-right: 142px;
  padding: 0 16px;
  position: relative;
  height: 32px;
  display: flex;
  align-items: center;

${({ query }) =>
  query
    ? `box-shadow: 1px 1px 7px 0 #c6b89e;
    background: #fff;`
    : ``}} ;

  &:focus-within {
    
  }
  // border-bottom: 1px solid #363535;

  input {
    padding-right: 16px;
    width: 366px;
    border: none;
    border-radius: 0;
    background-color: inherit;
    color: #101010;
  }
  input:focus {
    box-shadow:
      1px,
      1px,
      7px,
      0 #c6b89e;
    outline: none;
  }
`;

export const SearchResultDiv = styled.div`
  position: absolute;
  top: 38px;
  left: 0;
  width: 100%;
  align-items: center;
  background-color: white;

  p:first-child {
    text-align: center;
    padding: 40px 0;
  }

  div:first-of-type {
    padding: 12px 10px;
  }

  li {
    color: #101010;
    p {
      margin: 0 auto 0 8px;
      width: 220px;
    }
    li {
      display: flex;
      align-items: center;
      padding: 2px 16px;
      height: 64px;
    }
  }

  img {
    margin-right: 8px;
    height: 56px;
    object-fit: cover;
  }

  h4 {
    padding: 4px 16px 5px;
  }

  a {
    padding: 10px 24px;
    font-size: 19px;
    line-height: 1;
    font-weight: 500;
    color: white;
    background-color: #2d3f24;
  }
`;

export const GoodListResult = styled.li`
  h4 {
    border-bottom: 0.5px solid #cccbc7;
  }
  li {
    border-bottom: 0.5px solid #cccbc7;
  }
`;

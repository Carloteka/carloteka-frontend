import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export const FlexContainer = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;

  @media screen and (min-width: 1440px) {
  }
`;

export const Aside = styled.aside``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 1440px) {
    width: 304px;
  }

  fieldset {
    display: block;
  }

  fieldset:nth-child(even) {
    padding-bottom: 40px;
    border-bottom: 1px solid grey;
    legend {
      padding-top: 40px;
      width: 100%;
      border-top: 1px solid #a7a5a3;
    }
  }

  legend {
    margin-bottom: 40px;
  }

  label {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 25px;
    text-indent: 16px;
  }
  input {
    width: 18px;
    height: 18px;
  }

  button {
    width: 100%;
    height: 48px;
    color: white;
    background-color: #2d3f24;
    text-transform: uppercase;
  }
`;

export const Price = styled.fieldset`
  div {
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 24px;
  }

  div:last-child > label::before {
    content: '₴';
    position: absolute;
    left: 8px;
    color: #5b5b59;
  }

  input[type='range'] {
    height: 28px;
    // -webkit-appearance: none;
    // appearance: none;
    // background: transparent;
    // cursor: pointer;
    // width: 15rem;
  }

  label {
    position: relative;
    text-indent: 0px;
  }

  #price-range {
    margin: 16px 0;
  }

  input {
    width: 100%;
    height: 32px;
    text-align: right;
    border: 1px solid #cccbc7;
  }
`;

export const GoodsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;
export const Select = styled.select`
  padding-right: 48px;
  width: 176px;
  height: 25px;
  font-weight: 700;
  font-size: 18px;
  line-height: calc(23 / 18);
  border: none;
  cursor: pointer;
  appearance: none;
  outline: none;
`;
export const SelectBox = styled.div`
  display: inline-flex;
  position: relative;
  width: 176px;
  height: 25px;

  svg {
    position: absolute;
    top: 6.6px;
    right: 8px;
    transform: rotate(-90deg);
  }
`;

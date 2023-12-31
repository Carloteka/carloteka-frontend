import styled from 'styled-components';
// import { Link } from 'react-router-dom';

const transitionTime = '0.75s easy';

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

  label {
    position: relative;
    text-indent: 0px;
  }

  #price-range {
    margin: 16px 0;
    padding: 0;
    justify-content: center;
    height: 28px;

    & > div {
      gap: 0;
    }
    & .bar {
      height: 4px;
      box-shadow: none;
    }

    & .bar-left {
      padding: 0;
    }
    & .bar-right {
      padding: 0;
      box-shadow: none;
    }
    .caption {
      display: none;
    }
    .thumb::before {
      margin: -11px 0;
      width: 28px;
      height: 28px;
      box-shadow: none;
    }
    .thumb-right::before {
      right: 0;
      width: 28px;
      height: 28px;
      box-shadow: none;
    }
  }

  input {
    width: 100%;
    height: 32px;
    text-align: right;
    border: 1px solid #cccbc7;
  }
`;

export const TagsContainer = styled.div`
  margin-bottom: 32px;
  padding-right: 148px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 16px;

  ul {
    display: flex;
    flex-wrap: wrap;
    column-gap: 24px;
    row-gap: 16px;
  }

  li {
    padding: 7.5px 8px 7.5px 8px;
    height: 40px;
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: #f2f0ec;
  }

  svg {
    stroke: #101010;
    cursor: pointer;
  }

  li > label {
    display: none;
  }

  ul > li:last-child {
    background-color: inherit;

    p {
      display: none;
    }
    svg {
      display: none;
    }
    label {
      // position: absolute;
      // top: 50%;
      // right: 0;
      display: flex;
      height: 23px;
      cursor: pointer;
      font-weight: 500;
      font-size: 19px;
      line-height: calc(23 / 19);
      color: #000;
    }
  }
`;

export const GoodsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

export const SelectBox = styled.div`
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
  position: relative;
  height: 25px;

  svg {
    position: absolute;
    top: 6.6px;
    right: 8px;
    transform: rotate(-90deg);
    cursor: pointer;
    pointer-events: none;
  }
  & > p {
    padding-right: 48px;
    height: 25px;
    font-weight: 700;
    font-size: 18px;
    line-height: calc(23 / 18);
    cursor: pointer;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 0;
`;
export const Menu = styled.ul`
  display: block;
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 1;
  border: 1px solid #a7a5a3;
  box-shadow: 1px 1px 7px 0 #dad4c870;
  transition: visibility 0.75s;
  visibility: ${({ show }) => (show ? `visible` : `hidden`)};

  svg {
    position: static;
  }
`;

export const CheckedIcon = styled.svg`
  margin-right: 16px;
  padding: 6px 5px;
  background-color: #2d3f24;
  fill: #2d3f24;
  display: none;
  transition:
    fill 0.75s,
    width 0.15s,
    padding 0.15s,
    margin-right 0.15s;
  ${({ checked }) =>
    checked &&
    `fill:white; display:block; width:24px; padding:6px 5px; margin-right:16px; animation: 0.3s linear 0s 1 alternate move`};

  @keyframes move {
    from {
      width: 0;
    }
    to {
      width: 24px;
    }
  }
`;

export const SelectItem = styled.li`
  padding: 12px 16px;
  display: flex;
  background-color: white;
  color: #101010;
  cursor: pointer;
  transition:
    background-color 0.15s,
    color 0.25s;

  ${({ show }) =>
    show
      ? `background-color: #2d3f24; color:white`
      : `background-color: white; color:#101010`};
  &:hover {
    color: white;
    background-color: #2d3f24;
  }
  &:nth-child(even) {
    border-top: 0.5px solid #a7a5a3;
    border-bottom: 0.5px solid #a7a5a3;
  }
`;

import styled from 'styled-components';

export const DeliveryBox = styled.section`
  position: relative;
  display: flex;
  gap: 32px;

  justify-content: center;
  align-items;
  
  button {
    width: 100%;
    height: 48px;
    color: white;
    background-color: #2d3f24;
    text-transform: uppercase;
  }

  aside {
    padding-top: 116px;
  }
`;

export const Form = styled.form`
  width: 752px;

  h2 {
    margin-bottom: 40px;
  }

  h3 {
    margin: 56px 0 40px;
  }

  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .short {
    width: 368px;
  }

  input,
  select {
    padding: 16px;
    width: 100%;
    height: 50px;
    border: 1px solid #a7a5a3;
  }

  textarea {
    padding: 16px;
    width: 100%;
    height: 112px;
    font-family: inherit;
    font-size: 18px;
    line-height: calc(25 / 18);
    color: #000;
    resize: none;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 32px;
`;

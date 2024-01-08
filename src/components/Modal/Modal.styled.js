import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f0ec50;
  z-index: 0;
  overflow: hidden;
`;

export const ModalBox = styled.div`
  position: relative;

  width: 1314px;
  height: 745px;
  background-color: #fff;
`;

export const Form = styled.form`
  width: 752px;

  h2 {
    margin-bottom: 40px;
  }

  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  input {
    padding: 16px;
    width: 100%;
    height: 50px;
    border: 1px solid #a7a5a3;
  }
`;

export const Button = styled.button`
  width: 100%;

  color: white;
  background-color: #2d3f24;
  text-transform: uppercase;

  &:hover {
    background-color: #101010;
  }
  &:focus {
    border: 2px solid #dad4c8;
  }
`;

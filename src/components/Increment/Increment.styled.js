import styled from 'styled-components';

export const IncrementBox = styled.div`
  margin: 0 124px 0 108px;
  width: 119px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  order: 2;

  & button:first-child {
    letter-spacing: -0.2em;
  }
  button {
    font-weight: 400;
    font-size: 26px;
  }
`;

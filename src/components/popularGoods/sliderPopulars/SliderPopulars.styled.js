import styled from 'styled-components';

export const SliderContainer = styled.div`
  position: relative;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn_left {
    left: 4px;
  }
  .btn_right {
    right: 4px;
  }
`;

export const ChevronIcon = styled.svg``;

export const Chevron = styled.button`
  position: absolute;
  top: 134px;
  z-index: 1;
  width: 32px;
  height: 36px;
  background: #f2f0ec;
`;

export const Slider = styled.ul`
  display: flex;
  gap: 32px;

  li {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 304px;
    @media screen and (min-width: 1440px) {
      height: 456px;
      gap: 0px;
    }
  }
`;

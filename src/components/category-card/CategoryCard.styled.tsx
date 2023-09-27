import styled from 'styled-components'

export const CategoryCardContainer = styled.section`
  display: flex;
  gap: 72px;
  width: 1312px;
  height: 512px;
  background-color: #fff;
  margin-top: 88px;
  justify-content: center;
  align-items: center;
`
export const ImgContainer = styled.div<{ order: number }>`
  order: ${(props) => {
    return props.order
  }};
  button {
    border: none;
    width: 32px;
    height: 40px;
    flex-shrink: 0;
    background: #f2f0ec;
    box-shadow: 1px 1px 7px 0px rgba(218, 212, 200, 0.7);
  }
  position: relative;
  .btn_left {
    position: absolute;
    top: 50%;
  }
  .btn_right {
    position: absolute;
    top: 50%;
    right: 0px;
  }
  .category_img {
    height: 512px;
  }
`

export const TextContainer = styled.div`
  button {
    background-color: #fff;
    display: flex;
    width: 304px;
    height: 48px;
    padding: 10px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid #2d3f24;
    color: #2d3f24;
    text-align: center;
    font-family: Rubik;
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    line-height: 19px;
    text-transform: uppercase;
    margin-top: 77px;
  }
`

export const Title = styled.div`
  color: #101010;
  font-family: Rubik;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 43px;

  .title_line {
    margin-top: 16px;
    background: #dad4c8;
    width: 192px;
    height: 2px;
  }
`
export const Description = styled.div`
  color: #363535;
  font-family: 'Rubik';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  margin-top: 51px;
`

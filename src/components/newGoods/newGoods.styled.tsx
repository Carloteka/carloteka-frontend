import styled from "styled-components";

export const MainGoodsBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const GoodsItemsBlock = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    margin-left: 10px;
    color: #101010;
    font-size: 36px;
    font-family: "Rubik";
    font-weight: 600px;
    margin-top: 43px;
  }
  button {
    background-color: #f2f0ec;
    border: none;
    width: 40px;
    height: 60px;
    margin: 0px 25px;
    cursor: pointer;
    img {
      height: 15px;
      height: 15px;
    }
  }
`;
export const GoodsCards = styled.div`
  display: flex;
  .slider-button-prev {
    position: absolute;
    width: 50px;
    height: 70px;
    border: none;
    left: 1%;
  }
  .slider-button-next {
    position: absolute;
    width: 50px;
    height: 70px;
    border: none;
    right: 1%;
  }
`;

export const GoodsCardItem = styled.div`
  margin: 0px 11px;
  .cardImg {
    background-image: url(img/vaza.png);
    background-color: #dad4c8;
    width: 304px;
    height: 336px;
    padding: 10px 15px;
  }
  .card_details {
    display: flex;
    justify-content: space-between;
    .stock {
      background-color: #2d3f24;
      color: white;
      padding: 5px;
    }
  }
  h6 {
    color: #101010;
    font-size: 18px;
    font-family: "Rubik";
    font-weight: 600px;
    margin-top: 15px;
  }
  .rating {
    span {
      font-size: 18px;
      font-family: "Rubik";
      margin-left: 10px;
    }
  }
  .price {
    font-size: 18px;
    font-family: "Rubik";
    margin-top: 15px;
    margin-top: 15px;
    font-weight: 400px;
  }
`;

export const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;
export const CarouselButtons = styled.div `
  display: flex;
  justify-content: space-between;
`
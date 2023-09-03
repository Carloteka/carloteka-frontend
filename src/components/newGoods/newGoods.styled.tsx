import styled from "styled-components";

export const MainGoodsBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GoodsItemsBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0px;
  h1 {
    margin-left: 10px;
    color: #101010;
    font-size: 36px;
    font-family: "Rubik";
    font-weight: 600px;
    margin-top: 43px;
  }
`;
export const GoodsCards = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const GoodsCardItem = styled.div`
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

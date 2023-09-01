import styled from "styled-components";

export const MainGoodsBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GoodsItemsBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
export const GoodsCards = styled.div`
  display: flex;
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
  h6{
    color: #101010;
    font-size: 18px;
    font-family: "Rubik";
    font-weight: 600;
    line-height: 23px;
  }
`;

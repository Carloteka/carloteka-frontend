import {
  MainGoodsBlock,
  GoodsItemsBlock,
  GoodsCards,
  GoodsCardItem,
} from "./goods.styled";

export const Goods = () => {
  return (
    <MainGoodsBlock>
      <GoodsItemsBlock>
        <GoodsCards>
          <GoodsCardItem>
            <div className="cardImg">
              <div className="card_details">
                <div className="stock">Out of Stock</div>
                <img width={24} height={24} src="img/heart.png" alt="like"></img>
              </div>
            </div>
            <h6>Декоративна ваза з натурального дерева</h6>
            <div className="rating">
              <img alt="stars"></img>
              <span>10</span>
            </div>
            <div className="price">$10</div>
          </GoodsCardItem>
        </GoodsCards>
      </GoodsItemsBlock>
    </MainGoodsBlock>
  );
};

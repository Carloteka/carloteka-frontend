
import {
  MainGoodsBlock,
  GoodsItemsBlock,
  GoodsCards,
  GoodsCardItem,
} from "./popularGoods.styled";

export const PopularGoods = () => {
  return (
    <MainGoodsBlock>
      <GoodsItemsBlock>
        <h1>Популярні товари</h1>
        <GoodsCards>
            <GoodsCardItem>
              <div className="cardImg">
                <div className="card_details">
                  <div className="stock">Out of Stock</div>
                  <img
                    width={24}
                    height={24}
                    src="img/heart.png"
                    alt="like"
                  ></img>
                </div>
              </div>
              <h6>
                Декоративна ваза з <br /> натурального дерева
              </h6>
              <div className="rating">
                <img alt="stars" src="img/star.png"></img>
                <img alt="stars" src="img/star.png"></img>
                <img alt="stars" src="img/star.png"></img>
                <span>10</span>
              </div>
              <div className="price">$10</div>
            </GoodsCardItem>
            <GoodsCardItem>
              <div className="cardImg">
                <div className="card_details">
                  <div className="stock">Out of Stock</div>
                  <img
                    width={24}
                    height={24}
                    src="img/heart.png"
                    alt="like"
                  ></img>
                </div>
              </div>
              <h6>
                Декоративна ваза з <br /> натурального дерева
              </h6>
              <div className="rating">
                <img alt="stars" src="img/star.png"></img>
                <span>10</span>
              </div>
              <div className="price">$10</div>
            </GoodsCardItem>
            <GoodsCardItem>
              <div className="cardImg">
                <div className="card_details">
                  <div className="stock">Out of Stock</div>
                  <img
                    width={24}
                    height={24}
                    src="img/heart.png"
                    alt="like"
                  ></img>
                </div>
              </div>
              <h6>
                Декоративна ваза з <br /> натурального дерева
              </h6>
              <div className="rating">
                <img alt="stars" src="img/star.png"></img>
                <span>10</span>
              </div>
              <div className="price">$10</div>
            </GoodsCardItem>
            <GoodsCardItem>
              <div className="cardImg">
                <div className="card_details">
                  <div className="stock">Out of Stock</div>
                  <img
                    width={24}
                    height={24}
                    src="img/heart.png"
                    alt="like"
                  ></img>
                </div>
              </div>
              <h6>
                Декоративна ваза з <br /> натурального дерева
              </h6>
              <div className="rating">
                <img alt="stars" src="img/star.png"></img>
                <img alt="stars" src="img/star.png"></img>
                <img alt="stars" src="img/star.png"></img>
                <img alt="stars" src="img/star.png"></img>
                <span>10</span>
              </div>
              <div className="price">$10</div>
            </GoodsCardItem>
        </GoodsCards>
      </GoodsItemsBlock>
    </MainGoodsBlock>
  );
};

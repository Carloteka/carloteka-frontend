import { useState } from "react";
import {
  MainGoodsBlock,
  GoodsItemsBlock,
  GoodsCards,
  GoodsCardItem,
} from "./newGoods.styled";

export const NewGoods = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
  };

  return (
    <MainGoodsBlock>
      <GoodsItemsBlock>
        <h1>Нові товари</h1>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          <GoodsCards
            style={{
              display: "flex",
              width: "400%",
              transition: "transform 0.5s ease",
              transform: `translateX(-${activeIndex * 25}%)`,
              position: "relative",
            }}
          >
            {Array.from({ length: 4 }).map((_, index) => (
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
            ))}
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
        </div>
        <button
          onClick={handlePrevClick}
          style={{
            position: "absolute",
            left: 0,
            top: "130%",
            transform: "translateY(-50%)",
          }}
        >
          <img src="./img/Vectorleft.png" />
        </button>
        <button
          onClick={handleNextClick}
          style={{
            position: "absolute",
            right: 0,
            top: "130%",
            transform: "translateY(-50%)",
          }}
        >
          <img src="./img/VectorRight.png" />
        </button>
      </GoodsItemsBlock>
    </MainGoodsBlock>
  );
};

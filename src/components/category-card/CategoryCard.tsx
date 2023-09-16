import React from 'react'
import {
  CategoryCardContainer,
  ImgContainer,
  TextContainer,
  Title,
  Description,
} from './CategoryCard.styled'
type Props = { order: number }

export const CategoryCard = ({ order }: Props) => {
  return (
    <CategoryCardContainer>
      <ImgContainer order={order}>
        <button className='btn_left'>
          <img src="img/left.png" alt="left" />
        </button>
        <img src={`img/chess.png`} alt="img першої категорії" />
        <button className='btn_right'>
          <img src="img/right.png" alt="right" />
        </button>
      </ImgContainer>
      <TextContainer>
        <Title>
          ШАХИ, НАРДИ, ШАШКИ
          <div className="title_line"></div>
        </Title>
        <Description>
          Бездоганні шахові фігури, різні розміри, види та вподобання.
        </Description>
        <button className="card_btn" type="submit">
          Переглянути
        </button>
      </TextContainer>
    </CategoryCardContainer>
  )
}

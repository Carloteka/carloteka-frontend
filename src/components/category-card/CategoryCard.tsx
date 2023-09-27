import React from 'react'
import {
  CategoryCardContainer,
  ImgContainer,
  TextContainer,
  Title,
  Description,
} from './CategoryCard.styled'
type Props = {
  order: number
  title: string
  description: string
  image: string
  key: number
}

export const CategoryCard = ({ order, image, description, title }: Props) => {
  console.log(image);
  return (
    <CategoryCardContainer>
      <ImgContainer order={order}>
        <button className="btn_left">
          <img src="img/left.png" alt="left" />
        </button>
        <img className='category_img' src={`http://138.68.90.11/${image}`} alt="img категорії" />


        <button className="btn_right">
          <img src="img/right.png" alt="right" />
        </button>
      </ImgContainer>
      <TextContainer>
        <Title>
          {title}
          <div className="title_line"></div>
        </Title>
        <Description>
          {description}
        </Description>
        <button className="card_btn" type="submit">
          Переглянути
        </button>
      </TextContainer>
    </CategoryCardContainer>
  )
}

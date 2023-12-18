import { useState } from 'react';
import {
  ThumbPhoto,
  Button,
  Div,
  FlexContainer,
  Star,
} from './SliderItem.styled';
import sprite from '../../../../images/sprite.svg';
import { toggleLocalStorage } from 'src/utils/toggleLocalStorage';

export const SliderItem = ({ item }) => {
  const { id_name, name, mini_image, price } = item;

  let cartArray = [];
  let favoriteArray = [];

  if (localStorage.getItem('cart')) {
    cartArray = JSON.parse(localStorage.getItem('cart'));
  } else {
    localStorage.setItem('cart', JSON.stringify(cartArray));
  }

  if (localStorage.getItem('favorite')) {
    favoriteArray = JSON.parse(localStorage.getItem('favorite'));
  } else {
    localStorage.setItem('favorite', JSON.stringify(favoriteArray));
  }

  const isInCart = cartArray.includes(id_name);
  const isInFavorite = favoriteArray.includes(id_name);
  const [inCart, setInCart] = useState(isInCart);
  const [isFavorite, setIsFavorite] = useState(isInFavorite);

  function toggleCart() {
    toggleLocalStorage(inCart, 'cart', id_name);
    setInCart((prev) => !prev);
  }
  function toggleFavorite() {
    toggleLocalStorage(isFavorite, 'favorite', id_name);
    setIsFavorite((prev) => !prev);
  }

  return (
    <>
      <ThumbPhoto>
        <div>
          <Button
            type="button"
            style={{ backgroundColor: inCart ? '#2D3F24' : 'white' }}
            onClick={() => toggleCart()}
          >
            <svg>
              <use href={`${sprite}#cart`} />
            </svg>
          </Button>
          <Button
            type="button"
            style={{ backgroundColor: isFavorite ? '#2D3F24' : 'white' }}
            onClick={() => toggleFavorite()}
          >
            <svg style={{ stroke: isFavorite ? 'white' : '#101010' }}>
              <use href={`${sprite}#favorite`} />
            </svg>
          </Button>
        </div>
        <img
          src={
            import.meta.env.PROD
              ? `/${mini_image}`
              : `http://localhost:8000/${mini_image}`
          }
          alt="img першої категорії"
          width={304}
          height={304}
        />
      </ThumbPhoto>
      <h4>{name}</h4>
      <Div>
        <FlexContainer>
          <ul>
            {[0, 1, 2, 3, 4].map((index) => (
              <li key={index}>
                <Star style={{ fill: index <= 3 ? '#5B5B59' : 'transparent' }}>
                  <use href={`${sprite}#star`} />
                </Star>
              </li>
            ))}
          </ul>
          8
        </FlexContainer>
        <p>₴ {price}</p>
      </Div>
    </>
  );
};

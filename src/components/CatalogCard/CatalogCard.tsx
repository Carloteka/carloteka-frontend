import { useState } from 'react';
import {
  ThumbPhoto,
  Button,
  Div,
  FlexContainer,
  Star,
} from './CatalogCard.styled';
import sprite from '../../images/sprite.svg';
import { toggleLocalStorage } from '../../utils/toggleLocalStorage';

type Popular = {
  mini_image: string;
  name: string;
  price: number;
  id_name: string;
  in_stock: number;
};

interface SliderItemProps {
  item: Popular;
}

export const CatalogCard = ({ item }: SliderItemProps) => {
  const { id_name, name, mini_image, price, in_stock } = item;

  let cartArray: string[] = [];
  let favoriteArray: string[] = [];

  if (localStorage.getItem('cart')) {
    cartArray = JSON.parse(localStorage.getItem('cart') as string);
  } else {
    localStorage.setItem('cart', JSON.stringify(cartArray));
  }

  if (localStorage.getItem('favorite')) {
    favoriteArray = JSON.parse(localStorage.getItem('favorite') as string);
  } else {
    localStorage.setItem('favorite', JSON.stringify(favoriteArray));
  }

  const isInCart: boolean = cartArray.includes(id_name);
  const isInFavorite: boolean = favoriteArray.includes(id_name);
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

  function getBanner(in_stock: number) {
    let banner = '';
    switch (in_stock) {
      case 2:
        banner = 'Очікується';
        break;

      case 3:
        banner = 'Під замовлення';
        break;

      case 0:
        banner = 'Немає в наявності';
        break;

      default:
        banner = 'Очікується';
    }
    return banner;
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
        {!(in_stock === 1) && (
          <p
            style={{
              borderTop: in_stock === 2 ? '0.5px solid white' : '',
              backgroundColor:
                in_stock === 2
                  ? '#2D3F24'
                  : in_stock === 3
                  ? '#2864BE'
                  : '#b4a525',
            }}
          >
            {getBanner(in_stock)}
          </p>
        )}
        <img
          src={
            import.meta.env.PROD
              ? `/${mini_image}`
              : `http://localhost:8000/${mini_image}`
          }
          alt="img першої категорії"
          width={304}
          height={304}
          style={{
            opacity: in_stock === 0 || in_stock === 3 ? '0.5' : '',
            backgroundColor: in_stock === 0 || in_stock === 3 ? '#F2F0EC' : '',
          }}
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

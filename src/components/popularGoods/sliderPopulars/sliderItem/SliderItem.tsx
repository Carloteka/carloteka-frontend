import { useState } from "react";
import {  ThumbPhoto, Button, Div, FlexContainer , Star} from './SliderItem.styled';
import sprite from '../../../../images/sprite.svg';

export const SliderItem = ({ item }) => {
  const [inCart, setInCart] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  
    function toggleCart() { 
        setInCart(prev=>!prev)
    }
     function toggleFavorite() { 
        setIsFavorite(prev=>!prev)
    }

  return (      
        <>
          <ThumbPhoto>
            <div>
              <Button type='button' press={inCart} onClick={()=>toggleCart()}>
                <svg>
                  <use href={`${sprite}#cart`} />
                </svg></Button>
              <Button type='button' press={isFavorite} onClick={()=>toggleFavorite()}>
                <svg >
                  <use href={`${sprite}#favorite`} />
                </svg></Button></div>
              <img src={`http://localhost:8000/${item.mini_image}`} alt="img першої категорії" width={304} height={304} />
          </ThumbPhoto>
          <h4>{item.name}</h4>
          <Div>
              <FlexContainer>
                  <ul>
                      {[0, 1, 2, 3, 4].map( index =>
                      <li key={index}>
                              <Star rate={index <= 3}>
                                  <use href={`${sprite}#star`} />
                              </Star>
                        </li>)}
                  </ul>8
              </FlexContainer>
              <p>₴ { item.price}</p>              
           </Div>
        </>    
  )
}

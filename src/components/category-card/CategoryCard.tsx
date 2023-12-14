import {
  TextContainer,
  Title
} from './CategoryCard.styled';
import { Slider } from './slider/Slider';
import { useState } from 'react';

type Props = { category: {images: []}  }
type Image = { images: string }

export const CategoryCard = ({ category }: Props) => {
  const { name, description, images } = category;
  const [array, setArray] = useState(images);
  const width: number = 1;
  
  let arrayToRender:[Image] = array.slice(0, width);
  
  function sliderHandler(payload: 1 | -1) {
    if (array.length <= width) { return };
    const newArray = [...array];

    if (payload===-1) {
      const lastEl:Image = newArray.pop();
      newArray.unshift(lastEl);}
      
      if (payload=== 1) {
        const firstEl:Image = newArray.shift();
  
newArray.push(firstEl);
}

setArray(newArray);
}


// цей метод повинен мати захист коли довжина масиву менша за ширину слайдеру
// function sliderHandler(payload) {
// setArray(((width+payload)>array.length) || index+payload<0 ? array : arrayToRender.slice(index+payload, width+payload));
// }
  return (
    <>
      <Slider arrayToRender={ arrayToRender} sliderHandler={sliderHandler}  />

      <TextContainer>
        <Title>
          {name}          
        </Title>
        <p>
          {description}
        </p>
        <button className="card_btn" type="submit">
          Переглянути
        </button>
      </TextContainer>
    </>
  )
}

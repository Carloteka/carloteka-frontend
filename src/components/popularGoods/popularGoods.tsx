import { useState, useEffect } from "react";
import {Title} from "./popularGoods.styled";
import { fetchPopularGoods } from "../../api/api";
import { SliderPopulars } from "./sliderPopulars/SliderPopulars";

type Popular = { mini_image: string , name: string, price: number, id_name: string}

export const PopularGoods = () => {
  
  const [arrayPopulars, setArray] = useState([]);

    useEffect(() => {
        async function getPopulars() {
    try {
      const data = await fetchPopularGoods();
     
      setArray(data.slice(0, 12)) ;
    } catch (error) {
      console.log(error);
    }
  }
  getPopulars()
  }, []);


  const width: number = 4;
  
  let arrayToRender:array = []
  if
    (arrayPopulars?.length > 0) {arrayToRender = arrayPopulars.slice(0, width); } 
  
  function sliderHandler(payload: 1 | -1) {
    if (arrayPopulars.length <= width) { return };
    const newArray = [...arrayPopulars];

    if (payload===-1) {
      const lastEl:Popular = newArray.pop();
      newArray.unshift(lastEl);}
      
      if (payload=== 1) {
        const firstEl:Popular = newArray.shift();
  
newArray.push(firstEl);
}

setArray(newArray);
}

  return (
    <section>
      <Title>Популярні товари</Title>
      <SliderPopulars arrayToRender={ arrayToRender} sliderHandler={sliderHandler} />
      
    </section>
  );
};

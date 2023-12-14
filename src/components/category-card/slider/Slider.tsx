import { SliderContainer} from './Slider.styled';


// type Props = { category: {images: []}  }
// type Image = { images: string }

export const Slider = ({ arrayToRender, sliderHandler}) => {
  
// цей метод повинен мати захист коли довжина масиву менша за ширину слайдеру
// function sliderHandler(payload) {
// setArray(((width+payload)>array.length) || index+payload<0 ? array : arrayToRender.slice(index+payload, width+payload));
// }
  return (
    
      <SliderContainer>
        <button className='btn_left' type="button" onClick={() => sliderHandler(-1)}>
         <img src="img/left.png" alt="left" />
        </button><ul>{arrayToRender.map((el, index) => (<li key={index}><img src={`http://localhost:8000/${el.image}`} alt="img першої категорії" width={640} height={512}/></li>))}</ul>
        
        
        <button className='btn_right' type="button" onClick={() => sliderHandler(+1)}><img src="img/right.png" alt="right" /></button>
      </SliderContainer>
     
  )
}

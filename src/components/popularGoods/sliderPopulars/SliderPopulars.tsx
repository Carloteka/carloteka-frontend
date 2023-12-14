import { SliderContainer, Chevron, Slider,ThumbPhoto, Button} from './SliderPopulars.styled';
import sprite from '../../../images/sprite.svg';
import { SliderItem } from './sliderItem/SliderItem'; 

export const SliderPopulars = ({ arrayToRender, sliderHandler }) => {
 
  
  return (    
    <SliderContainer>
      <Chevron className='btn_left' type="button" onClick={() => sliderHandler(-1)}>
         <img src="img/left.png" alt="left" />
      </Chevron>
          
      <Slider>{arrayToRender.map((el, index) => (
        <li key={index}>
          <SliderItem item={ el} />
            
         </li>))}
      </Slider>        
        
      <Chevron className='btn_right' type="button" onClick={() => sliderHandler(+1)}><img src="img/right.png" alt="right" /></Chevron>
    </SliderContainer>
     
  )
}

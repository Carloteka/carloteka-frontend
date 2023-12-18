import {
  SliderContainer,
  Chevron,
  ChevronIcon,
  Slider,
} from './SliderPopulars.styled';
import sprite from '../../../images/sprite.svg';
import { SliderItem } from './sliderItem/SliderItem';

export const SliderPopulars = ({ arrayToRender, sliderHandler }) => {
  return (
    <SliderContainer>
      <Chevron
        className="btn_left"
        type="button"
        onClick={() => sliderHandler(-1)}
      >
        <ChevronIcon $left={+true} width={7.5} height={11}>
          <use href={`${sprite}#chevron`} />
        </ChevronIcon>
      </Chevron>

      <Slider>
        {arrayToRender.map((el, index) => (
          <li key={index}>
            <SliderItem item={el} />
          </li>
        ))}
      </Slider>

      <Chevron
        className="btn_right"
        type="button"
        onClick={() => sliderHandler(+1)}
      >
        <ChevronIcon $left={+false} width={7.5} height={11}>
          <use href={`${sprite}#chevron`} />
        </ChevronIcon>
      </Chevron>
    </SliderContainer>
  );
};

import {
  SliderContainer,
  Chevron,
  ChevronIcon,
  Slider,
} from './SliderPopulars.styled';
import sprite from '../../../images/sprite.svg';
import { CatalogCard } from '../../CatalogCard/CatalogCard';
import { Good as Popular } from '../../../../@types/custom';

// type Popular = {
//   category__id_name: string;
//   id: string;
//   mini_image: string;
//   name: string;
//   price: number;
//   id_name: string;
//   in_stock: number;
// };

interface SliderPopularsProps {
  arrayToRender: Popular[];
  sliderHandler: (payload: number) => void;
}

export const SliderPopulars = ({
  arrayToRender,
  sliderHandler,
}: SliderPopularsProps) => {
  return (
    <SliderContainer>
      <Chevron
        className="btn_left"
        type="button"
        onClick={() => sliderHandler(-1)}
      >
        <ChevronIcon width={7.5} height={11}>
          <use href={`${sprite}#chevron`} />
        </ChevronIcon>
      </Chevron>

      <Slider>
        {arrayToRender.map((el, index) => (
          <li key={index}>
            <CatalogCard item={el} />
          </li>
        ))}
      </Slider>

      <Chevron
        className="btn_right"
        type="button"
        onClick={() => sliderHandler(1)}
      >
        <ChevronIcon
          style={{ transform: 'rotate(180deg)' }}
          width={7.5}
          height={11}
        >
          <use href={`${sprite}#chevron`} />
        </ChevronIcon>
      </Chevron>
    </SliderContainer>
  );
};

import { Suspense, useState, useEffect, useContext } from 'react';
import { CartContext } from '../../components/Layout';
import { Outlet, useParams, Link, NavLink } from 'react-router-dom';
import { PageTitle } from '../../components/pageTitle/PageTitle';
import { Loader } from '../../components/Loader/Loader';
import { ContainerLimiter } from '../../components/containerLimiter/ContainerLimiter';
import { Increment } from '../../components/Increment/Increment';
import {
  SectionInfo,
  SellDiv,
  Price,
  Material,
  AddToCartBtn,
  AddToFavoriteBtn,
  AdditionalNavigation,
} from './GoodDetail.styled';
import { Slider } from '../../components/category-card/slider/Slider';
import sprite from '../../images/sprite.svg';
import { fetchItemDetails } from '../../api/api';
import { toggleLocalStorage } from '../../utils/toggleLocalStorage';
import { addToCart } from '../../utils/addToCart';

type Good = {
  mini_image: string;
  images: [{ image: string }];
  name: string;
  mini_description: string;
  price: number;
  id_name: string;
  description: string;
  in_stock: number;
};

type Image = { image: string };

// interface GoodDetailProps {
//   id: string;
// }

const GoodDetail = () => {
  const { goodId } = useParams();

  const { setAmountInCart } = useContext(CartContext);

  const [good, setGood] = useState<Good>({} as Good);
  //   console.log(good);

  useEffect(() => {
    async function getGoodDetail() {
      try {
        const data = await fetchItemDetails(goodId);
        setArray(data.images);
        setGood(data);
        setIsFavorite(favoriteArray.includes(data.id_name));
      } catch (error) {
        console.log(error);
      }
    }
    getGoodDetail();
  }, [goodId]);

  let goodsInCart: { id: string; amount: number }[] = [];
  let favoriteArray: string[] = [];

  if (localStorage.getItem('cart')) {
    goodsInCart = JSON.parse(localStorage.getItem('cart') as string);
  }

  let goods: [] = [];

  if (localStorage.getItem('goods')) {
    goods = JSON.parse(localStorage.getItem('goods') as string);
  }

  const goodsInCartArray = goods.filter((el: { id_name: string }) =>
    goodsInCart.some((item) => el.id_name === item.id),
  );

  if (localStorage.getItem('favorite')) {
    favoriteArray = JSON.parse(localStorage.getItem('favorite') as string);
  } else {
    localStorage.setItem('favorite', JSON.stringify(favoriteArray));
  }

  const isInFavorite: boolean = favoriteArray.includes(good?.id_name);
  const [isFavorite, setIsFavorite] = useState(isInFavorite);
  const [inCart, setInCart] = useState(goodsInCartArray);
  const [amount, setAmount] = useState(1);

  const [array, setArray] = useState<Image[]>(good?.images || []);
  //   console.log(array);

  const width: number = 1;

  const arrayToRender: Image[] = array.slice(0, width);

  function sliderHandler(payload: number) {
    if (array.length <= width) {
      return;
    }
    const newArray = [...array];

    if (payload === -1) {
      const lastEl: Image = newArray.pop() as Image;
      newArray.unshift(lastEl);
    }

    if (payload === 1) {
      const firstEl: Image = newArray.shift() as Image;

      newArray.push(firstEl);
    }

    setArray(newArray);
  }

  function increment(amount: number, id: string) {
    const newArray: Good[] = [...inCart];
    setAmount(amount);
    localStorage.setItem('invoice', JSON.stringify(newArray));

    setInCart(newArray);
  }

  function toggleFavorite() {
    toggleLocalStorage(isFavorite, 'favorite', good.id_name);
    setIsFavorite((prev) => !prev);
  }

  return (
    good && (
      <>
        <PageTitle>{good.name}</PageTitle>
        <ContainerLimiter paddingTopMob={'56px'} paddingTopDesc={'56px'}>
          <SectionInfo>
            <Slider
              arrayToRender={arrayToRender}
              sliderHandler={sliderHandler}
            ></Slider>
            <SellDiv>
              <h3>{good.mini_description}</h3>
              <Price>₴ {good.price}</Price>
              <p>
                <span>Наявність в магазині: </span>
                {good.in_stock === 1 ? 'так' : 'no'}
              </p>
              <Material>{good.mini_description}</Material>
              <div>
                <Increment
                  increment={increment}
                  id_name={good.id_name}
                  quantity={amount}
                />
                <AddToCartBtn
                  type="button"
                  onClick={() => addToCart(amount, good.id_name)}
                >
                  Додати до кошика
                </AddToCartBtn>
                <AddToFavoriteBtn
                  type="button"
                  style={{
                    backgroundColor: isFavorite ? '#2D3F24' : 'transparent',
                  }}
                  onClick={() => toggleFavorite()}
                >
                  <svg
                    width={24}
                    height={24}
                    style={{
                      fill: isFavorite ? 'white' : '#101010',
                    }}
                  >
                    <use href={`${sprite}#favorite`} />
                  </svg>
                </AddToFavoriteBtn>
                <Link to={'/cart'}>Купити в один клік</Link>
              </div>
              <p>
                <span>Категорія: </span>
                {good.name}
              </p>
            </SellDiv>
          </SectionInfo>

          <AdditionalNavigation>
            <li>
              <NavLink to="description">Опис &nbsp; /</NavLink>
            </li>
            <li>
              <NavLink to="additional">Додаткова інформація &nbsp; /</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Відгуки</NavLink>
            </li>
          </AdditionalNavigation>

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </ContainerLimiter>
      </>
    )
  );
};

export default GoodDetail;

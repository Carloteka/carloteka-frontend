import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageTitle } from 'src/components/pageTitle/PageTitle';
import { ContainerLimiter } from 'src/components/containerLimiter/ContainerLimiter.tsx';
import { Paginator } from '../../components/Paginator/Paginator';
import { CatalogCard } from '../../components/CatalogCard/CatalogCard';
import {
  FlexContainer,
  Aside,
  Form,
  Price,
  GoodsList,
  SelectBox,
  Select,
} from './Catalog.styled';
import { toggleLocalStorage } from 'src/utils/toggleLocalStorage';
import sprite from '../../images/sprite.svg';
import { fetchAllGoods } from '../../api/api';

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  // const stock = searchParams.get('stock');
  const [priceValue, setPriceValue] = useState(4000);

  const [currentPage, setCurrentPage] = useState(1);

  const [rotate, setRotate] = useState(false);

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams],
  );
  const { cat, stock, price } = params;

  console.log(params);

  let goods = [];
  let categories = [];

  if (localStorage.getItem('goods')) {
    goods = JSON.parse(localStorage.getItem('goods'));
  }

  if (localStorage.getItem('categories')) {
    categories = JSON.parse(localStorage.getItem('categories'));
  }

  const [catalog, setCatalog] = useState(goods);
  const [category, setCategory] = useState(categories);

  useEffect(() => {
    if (query) {
      const newparams = {
        ...params,
        query: query,
      };

      setSearchParams(newparams);
    }

    async function getAllGoods() {
      try {
        const data = await fetchAllGoods();
        setCatalog(data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllGoods();
  }, [query]);

  function getGoodsInStock() {
    if (!catalog || catalog?.length === 0) {
      return;
    }
    const quantity = catalog.filter((el) => el.in_stock > 0);
    return quantity.length;
  }

  function getGoodsToOrder() {
    if (catalog === undefined) {
      return;
    }
    const quantity = catalog.filter((el) => el.to_order > 0);
    return quantity.length;
  }

  function getGoodsSizeLarge() {
    if (catalog === undefined) {
      return;
    }
    const quantity = catalog.filter((el) => el.size === 'large');
    return quantity.length;
  }
  function getGoodsSizeMiddle() {
    if (catalog === undefined) {
      return;
    }
    const quantity = catalog.filter((el) => el.size === 'middle');
    return quantity.length;
  }
  function getGoodsSizeLittle() {
    if (catalog === undefined) {
      return;
    }
    const quantity = catalog.filter((el) => el.size === 'little');
    return quantity.length;
  }

  function priceRangeHandler(value) {
    setPriceValue(value);
  }

  function onChangeHandler(field, value) {
    // console.log(value);
    // let newParams = {};
    // let temp = params[field];

    // if (temp === undefined) {
    //   newParams = { ...params, [field]: value };
    //   console.log('undef', params);
    // } else if (typeof temp === 'string') {
    //   console.log('string', temp, params);
    //   const t = [];
    //   t.push(temp, value);
    //   console.log(t);
    //   newParams = { ...params, [field]: t };
    // } else {
    //   console.log('else', temp, params);
    //   newParams = { ...params, [field]: [...temp, value] };
    // }

    let temp = params[field];
    const newparams = { ...params, [field]: temp ? temp + ',' + value : value };

    setSearchParams(newparams);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ query: 'fa', cat: ['odin', 'dva'], da: ['sam'] });
    // form.reset();
  };

  let pageCount = 3;

  const [limit, setLimit] = useState(12);

  let goodsQuantity = 0;
  goodsQuantity = catalog?.length > 0 && catalog.length;
  if (goodsQuantity) {
    pageCount = Math.ceil(goodsQuantity / limit);
  }

  function toggleRotate() {
    setRotate((prev) => !prev);
  }

  return (
    <>
      <PageTitle>Каталог</PageTitle>
      <ContainerLimiter paddingTopMob={'16px'} paddingTopDesc={'56px'}>
        <FlexContainer>
          <Aside>
            <Form onSubmit={handleSubmit}>
              <fieldset>
                <legend>Категорії товарів</legend>
                {category?.map((el) => (
                  <label key={el.id_name}>
                    <input
                      type="checkbox"
                      name="category"
                      value={el.id_name}
                      onChange={(e) => onChangeHandler('cat', e.target.value)}
                    />
                    {el.name}
                  </label>
                ))}
              </fieldset>

              <fieldset>
                <legend>Наявність в магазині</legend>

                <label>
                  <input
                    type="checkbox"
                    name="stock"
                    value="instock"
                    onChange={(e) => onChangeHandler('stock', e.target.value)}
                  />
                  В наявності ({getGoodsInStock()} 17)
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="stock"
                    value="to-order"
                    onChange={(e) => onChangeHandler('stock', e.target.value)}
                  />
                  Під замовлення ({getGoodsToOrder()} 3)
                </label>
              </fieldset>

              <fieldset>
                <legend>Розмір</legend>

                <label>
                  <input type="checkbox" name="size" value="large" />
                  Великий ({getGoodsSizeLarge()} 9)
                </label>

                <label>
                  <input type="checkbox" name="size" value="middle" />
                  Середній ({getGoodsSizeMiddle()} 6)
                </label>
                <label>
                  <input type="checkbox" name="size" value="little" />
                  Маленький ({getGoodsSizeLittle()} 4)
                </label>
              </fieldset>

              <Price>
                <legend>Ціна</legend>
                <div>
                  <span>0</span>
                  <span>{priceValue}</span>
                  <span>10000</span>
                </div>

                <label id="price-range">
                  <input
                    type="range"
                    name="price"
                    onChange={(e) => priceRangeHandler(e.target.value)}
                    value={priceValue}
                    min={0}
                    max={10000}
                  />
                </label>
                <div>
                  <label>
                    <input
                      type="number"
                      name="priceFrom"
                      placeholder="0"
                      min="0"
                      max="10000"
                    />
                  </label>
                  <label>
                    <input
                      type="number"
                      name="priceTo"
                      placeholder="4000"
                      min="0"
                      max="10000"
                    />
                  </label>
                </div>
              </Price>
              <button type="submit">Застосувати</button>
            </Form>
          </Aside>
          <div>
            <div
              style={{
                marginBottom: '40px',
                display: 'inlineFlex',
                textAlign: 'left',
              }}
            >
              <span>Представлено 1-9 з 100 </span>
              <span style={{ margin: '0 32px' }}> | </span>
              <span> Сортувати: </span>
              <SelectBox>
                <Select name="sort" onClick={() => toggleRotate()}>
                  <option value="rating" defaultValue="Популярністю">
                    За популярністю
                  </option>
                  <option value="price">Від дешевих до дорогих</option>
                  <option value="price">Від дорогих до дешевих</option>
                  <option value="price">За рейтингом</option>
                </Select>
                <svg
                  width={8}
                  height={12}
                  style={{
                    transform: rotate ? 'rotate(-270deg)' : 'rotate(-90deg)',
                  }}
                >
                  <use href={`${sprite}#chevron`} />
                </svg>
              </SelectBox>
            </div>

            <GoodsList>
              {catalog?.map((el) => (
                <li key={el.id_name}>
                  <CatalogCard item={el} />
                </li>
              ))}
            </GoodsList>
            <Paginator
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              // pageCount={limit !== 12 ? 0 : goodsQuantity ? pageCount : 3}
            />
          </div>
        </FlexContainer>
      </ContainerLimiter>
    </>
  );
};

export default Catalog;

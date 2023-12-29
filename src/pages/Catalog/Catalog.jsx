import { useState, useEffect, useMemo, useRef } from 'react';
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
  TagsContainer,
  GoodsList,
  SelectBox,
  Select,
} from './Catalog.styled';
import { toggleLocalStorage } from 'src/utils/toggleLocalStorage';
import sprite from '../../images/sprite.svg';
import { fetchAllGoods, fetchFilteredGoods } from '../../api/api';

const Catalog = () => {
  const isFirst = useRef(true);
  const select = useRef();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams],
  );

  const [rotate, setRotate] = useState(false);

  function isChecked(field, value) {
    const temp = params[field];

    return temp && temp.includes(value) ? true : false;
  }

  function getPriceValue(field) {
    const temp = params[field];

    return temp ? temp : field === 'price-to' ? 4000 : 0;
  }

  // let goods = [];
  let categories = [];

  // if (localStorage.getItem('goods')) {
  //   goods = JSON.parse(localStorage.getItem('goods'));
  // }

  if (localStorage.getItem('categories')) {
    categories = JSON.parse(localStorage.getItem('categories'));
  }

  const [catalog, setCatalog] = useState([]);
  const [quantity, setQuantity] = useState(catalog?.length);
  const [limit, setLimit] = useState(12);
  const [tags, setTags] = useState([]);

  // const [catalog, setCatalog] = useState(goods);
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
        const data = await fetchAllGoods(12);
        setQuantity(data.length);
        setCatalog(data);
      } catch (error) {
        console.log(error);
      }
    }

    if (isFirst.current) {
      isFirst.current = false;
      if (Object.keys(params).length === 0) {
        getAllGoods();
        return;
      }
      handleSubmit();
    }

    setTags(getTags());
  }, [query, params, setSearchParams]);

  function getTags() {
    const tagsList = [];
    category.forEach((el) => {
      if (isChecked('category-id-name', el.id_name)) {
        tagsList.push({
          field: 'category-id-name',
          value: el.id_name,
          tag: el.name,
        });
      }
    });

    const availability = 'in-stock';
    params[availability] &&
      tagsList.push({ field: 'in-stock', value: 'True', tag: 'В наявності' });

    const backorder = 'specific-order';
    params[backorder] &&
      tagsList.push({
        field: 'specific-order',
        value: 'True',
        tag: 'Під замовлення',
      });

    const priceFrom = 'price-from';
    const priceTo = 'price-to';
    const price = `₴${params[priceFrom] ? getPriceValue('price-from') : 0} - ₴${
      params[priceTo] && getPriceValue('price-to')
    }`;

    if (params[priceTo] || params[priceFrom]) {
      tagsList.push({ field: 'price', tag: price });
    }

    if (tagsList.length > 0) {
      tagsList.push('dummy');
    }

    return tagsList;
  }

  function getRangeToDisplay() {
    if (!catalog || catalog?.length === 0) {
      return;
    }
    let range = '';
    if (!params.page) {
      range = `1-${catalog.length}`;
    } else {
      range = `${(params.page - 1) * limit + 1}-${
        (params.page - 1) * limit + catalog.length
      }`;
    }
    if (catalog.length === 1) {
      range = !params.page
        ? '1'
        : `${(params.page - 1) * limit + catalog.length}-й`;
    }
    return range;
  }

  function getGoodsInStock() {
    if (!catalog || catalog?.length === 0) {
      return;
    }
    const amount = catalog.filter((el) => el.in_stock === 1);
    return amount.length;
  }

  function getGoodsToOrder() {
    if (catalog === undefined) {
      return;
    }
    const amount = catalog.filter((el) => el.in_stock === 3);
    return amount.length;
  }

  function getGoodsSizeLarge() {
    if (catalog === undefined) {
      return;
    }
    const amount = catalog.filter((el) => el.size === 'large');
    return amount.length;
  }
  function getGoodsSizeMiddle() {
    if (catalog === undefined) {
      return;
    }
    const amount = catalog.filter((el) => el.size === 'middle');
    return amount.length;
  }
  function getGoodsSizeLittle() {
    if (catalog === undefined) {
      return;
    }
    const amount = catalog.filter((el) => el.size === 'little');
    return amount.length;
  }

  function onChangeHandler(field, value) {
    let newparams = {};
    let temp = params[field];

    if (field === 'price') {
      const priceTo = 'price-to';
      const priceFrom = 'price-from';

      newparams = {
        ...params,
      };

      delete newparams[priceTo];
      delete newparams[priceFrom];

      setSearchParams(newparams);
      return;
    }

    if (field === 'price-from' || field === 'price-to') {
      newparams = {
        ...params,
        [field]: value,
      };

      setSearchParams(newparams);
      return;
    }

    if (temp && temp.includes(value)) {
      const t = temp
        .replace(`&${field}=${value}`, '')
        .replace(`${value}&${field}=`, '')
        .replace(value, '');
      newparams = {
        ...params,
        [field]: t,
      };
      if (t === '') {
        delete newparams[field];
      }
    } else {
      newparams = {
        ...params,
        [field]: temp ? temp + `&${field}=` + value : value,
      };
    }
    setSearchParams(newparams);
  }

  const handleSubmit = (e) => {
    e?.preventDefault();
    // if (!params.page) {
    //   console.log('net');
    //   setSearchParams({ ...params, page: 1 });
    // }

    let s = location.search.replaceAll('%26', '&').replaceAll('%3D', '=');

    async function getFilteredCategories() {
      try {
        const data = await fetchFilteredGoods(s);
        setQuantity(data.count);
        setCatalog(data.data);
      } catch (error) {
        console.log(error);
      }
    }

    getFilteredCategories();
  };

  function toggleRotate(e) {
    setRotate((prev) => !prev);
  }
  function onSelectHandler(e) {
    console.log(select.current.value);
    console.log(select.current.offsetWidth);
    // let width = select.current.style.width;
    // select.current.style.width = width + 'em';
  }

  function deleteFilter(field, value) {
    const newTags = tags.filter(
      (el) => !(el.field === field && el.value === value),
    );

    setTags(newTags);
    onChangeHandler(field, value);

    handleSubmit();
  }

  function pageChanger(page) {
    const newparams = { ...params, page };
    setSearchParams(newparams);

    handleSubmit();
  }

  const sortedByStock = catalog.toSorted((a, b) => {
    if (a.in_stock === 1 && b.in_stock === 1) {
      return 0;
    } else if (a.in_stock === 1) {
      return -1;
    } else if (b.in_stock === 1) {
      return 1;
    } else if (a.in_stock === 2 && b.in_stock === 2) {
      return 0;
    } else if (a.in_stock === 2) {
      return -1;
    } else if (b.in_stock === 2) {
      return 1;
    } else {
      return a.in_stock - b.in_stock;
    }
  });

  return (
    <>
      <PageTitle>Каталог</PageTitle>
      <ContainerLimiter paddingTopMob={'16px'} paddingTopDesc={'56px'}>
        <FlexContainer>
          <Aside>
            <Form onSubmit={handleSubmit} id="filter">
              <fieldset>
                <legend>Категорії товарів</legend>
                {category?.map((el) => (
                  <label key={el.id_name}>
                    <input
                      type="checkbox"
                      name="cat"
                      value={el.id_name}
                      checked={isChecked('category-id-name', el.id_name)}
                      onChange={() =>
                        onChangeHandler('category-id-name', el.id_name)
                      }
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
                    value="True"
                    checked={isChecked('in-stock', 'True')}
                    onChange={() => onChangeHandler('in-stock', 'True')}
                  />
                  В наявності ({getGoodsInStock()})
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="stock"
                    value="True"
                    checked={isChecked('specific-order', 'True')}
                    onChange={() => onChangeHandler('specific-order', 'True')}
                  />
                  Під замовлення ({getGoodsToOrder()} )
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
                  <span>{getPriceValue('price-to')}</span>
                  <span>10000</span>
                </div>

                <label id="price-range">
                  <input
                    type="range"
                    name="priceTo"
                    value={getPriceValue('price-to')}
                    onChange={(e) =>
                      onChangeHandler('price-to', e.target.value)
                    }
                    min={0}
                    max={10000}
                  />
                </label>
                <div>
                  <label>
                    <input
                      type="number"
                      name="price-from"
                      max={getPriceValue('price-to')}
                      value={getPriceValue('price-from')}
                      onChange={(e) =>
                        onChangeHandler('price-from', e.target.value)
                      }
                      placeholder="0"
                      min="0"
                      // max="10000"
                    />
                  </label>
                  <label>
                    <input
                      type="number"
                      name="price-to"
                      value={getPriceValue('price-to')}
                      onChange={(e) =>
                        onChangeHandler('price-to', e.target.value)
                      }
                      placeholder="4000"
                      // min="0"
                      min={getPriceValue('price-from')}
                      max="10000"
                    />
                  </label>
                </div>
              </Price>
              <button type="submit">Застосувати</button>
            </Form>
          </Aside>
          <div>
            {tags?.length > 1 && (
              <TagsContainer>
                <ul>
                  {tags.map((el, index) => (
                    <li key={`${el.value}-${index}`}>
                      <p>{el.tag}</p>
                      <svg
                        width={15}
                        height={15}
                        onClick={() => deleteFilter(el.field, el.value)}
                      >
                        <use href={`${sprite}#close`} />
                      </svg>
                      <label>
                        Видалити всі
                        <input
                          type="reset"
                          form="filter"
                          value=""
                          onClick={() => {
                            setSearchParams({});
                            setTags([]);
                          }}
                        />
                      </label>
                    </li>
                  ))}
                </ul>
              </TagsContainer>
            )}
            <div
              style={{
                marginBottom: '40px',
                display: 'inlineFlex',
                textAlign: 'left',
              }}
            >
              <span>
                Представлено {getRangeToDisplay()} з {quantity}
              </span>
              <span style={{ margin: '0 32px' }}> | </span>
              <span> Сортувати: </span>
              <SelectBox>
                <Select
                  ref={select}
                  name="sort-by"
                  onClick={(e) => toggleRotate(e)}
                  onChange={(e) => onSelectHandler(e)}
                >
                  <option
                    value="rating"
                    defaultValue="За популярністю"
                    label="За популярністю"
                  >
                    За популярністю
                  </option>
                  <option value="price-up" label="Від дешевих до дорогих">
                    Від дешевих до дорогих
                  </option>
                  <option value="price-down" label="Від дорогих до дешевих">
                    Від дорогих до дешевих
                  </option>
                  <option value="rating" label="За рейтингом">
                    За рейтингом
                  </option>
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
              {sortedByStock?.map((el) => (
                <li key={el.id_name}>
                  <CatalogCard item={el} />
                </li>
              ))}
            </GoodsList>
            <Paginator
              setCurrentPage={pageChanger}
              currentPage={params.page || 1}
              pageCount={limit !== 12 ? 0 : Math.ceil(quantity / limit)}
            />
          </div>
        </FlexContainer>
      </ContainerLimiter>
    </>
  );
};

export default Catalog;

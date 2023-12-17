import {
  Search,
  Input,
  SearchResultDiv,
  GoodListResult,
  Button,
} from './SearchBar.styled';
import sprite from '../../../images/sprite.svg';
import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { fetchPopularGoods } from 'src/api/api';

export const SearchBar = () => {
  const [searchedGoods, setSearchedGoods] = useState([]);
  const [searchedCategories, setSearchedCategories] = useState([]);
  const [goods, setGoods] = useState([]);
  const [categories, setCategories] = useState([]);
  const isFirstRender = useRef(true);
  const inputRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    async function getAllGoods() {
      try {
        const data = await fetchPopularGoods();
        localStorage.setItem('goods', JSON.stringify(data));
        setGoods(data);
      } catch (error) {
        console.log(error);
      }
    }

    if (isFirstRender.current) {
      isFirstRender.current = false;
      getAllGoods();

      const items = JSON.parse(localStorage.getItem('categories'));
      if (items) {
        setCategories(items);
      }
      return;
    }

    if (query === '') {
      return;
    }

    function filtering(array) {
      const filteredArray = array.filter((el) =>
        el.name.toUpperCase().includes(query.toUpperCase()),
      );
      return filteredArray.slice(0, 4);
    }

    setSearchedGoods(filtering(goods));
    setSearchedCategories(filtering(categories));
  }, [goods, categories, query]);

  function handleSubmit(e) {
    e.preventDefault();

    setSearchParams('search', e.target.firstElementChild.value);
  }

  useEffect(() => {
    console.log(inputRef);
  }, [inputRef]);

  const handleBlur = () => {
    if (inputRef.current) {
      inputRef.current.style.display = 'none';
    }
  };
  const handleChangeInput = (value) => {
    setSearchParams({ query: value });
    if (inputRef.current) {
      inputRef.current.style.display = 'block';
    }
  };

  return (
    <Search onSubmit={handleSubmit} query={query}>
      <Input
        type={'search'}
        name="query"
        value={query}
        placeholder="Пошук товарів"
        onChange={(e) => handleChangeInput(e.target.value)}
        onBlur={() => handleBlur()}
      />
      <button
        type="submit"
        onClick={() => {
          return false;
        }}
      >
        <svg width={24} height={24}>
          <use href={`${sprite}#search`} />
        </svg>
      </button>
      {query && (
        <SearchResultDiv ref={inputRef}>
          {!searchedGoods.length > 0 && !searchedCategories.length > 0 ? (
            <>
              <p>нічого не знайдено</p>
              <div>
                <Button title="Show catalog" to={'./catalog'}>
                  ПОДИВИТИСЬ КАТАЛОГ
                </Button>
              </div>
            </>
          ) : (
            <>
              <ul>
                {searchedCategories.length > 0 && (
                  <li>
                    <h4>Категорії товарів</h4>
                    <ul>
                      {searchedCategories.map((el) => (
                        <li key={el?.id}>
                          <img
                            src={`http://localhost:8000/${el.images[0].image}`}
                            width={47}
                            height={56}
                            alt={el.name}
                          />
                          <Link to={`./catalog?=${query}`}>{el?.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                )}
                {searchedGoods.length > 0 && (
                  <GoodListResult>
                    <h4>Товари</h4>
                    <ul>
                      {searchedGoods.map((el) => (
                        <li key={el?.id}>
                          <img
                            src={`http://localhost:8000/${el.mini_image}`}
                            width={40}
                            height={48}
                            alt={el.name}
                          />
                          <Link to={`./catalog?=${query}`}>{el?.name}</Link>
                          <span>₴ {el?.price}</span>
                        </li>
                      ))}
                    </ul>
                  </GoodListResult>
                )}
              </ul>
              <div>
                <Button title="Show all results" to={`./catalog?=${query}`}>
                  Всі результати
                </Button>
              </div>
            </>
          )}
        </SearchResultDiv>
      )}
    </Search>
  );
};

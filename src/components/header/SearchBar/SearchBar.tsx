import { Search, SearchResultDiv, GoodListResult } from './SearchBar.styled';
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
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  console.log(goods, query);

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

  function getSearchResults() {}

  function handleSubmit(e) {
    console.log(e.target.firstElementChild.value);
    e.preventDefault();

    setSearchParams('search', e.target.firstElementChild.value);
  }

  return (
    <Search onSubmit={handleSubmit} query={query}>
      <input
        type={'search'}
        name="query"
        value={query}
        placeholder="Пошук товарів"
        onChange={(e) => {
          getSearchResults(), setSearchParams({ query: e.target.value });
        }}
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
        <SearchResultDiv>
          {!searchedGoods.length > 0 && !searchedCategories.length > 0 ? (
            <>
              <p>нічого не знайдено</p>
              <div>
                <Link title="Show catalog" to={'./catalog'}>
                  ПОДИВИТИСЬ КАТАЛОГ
                </Link>
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
                          <p>{el?.name}</p>
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
                            src={`http://localhost:8000/${el.images[0].image}`}
                            width={40}
                            height={48}
                            alt={el.name}
                          />
                          <p>{el?.name}</p>
                          <span>₴ {el?.price}</span>
                        </li>
                      ))}
                    </ul>
                  </GoodListResult>
                )}
              </ul>
              <div>
                <Link title="Show all results" to={`./catalog?=${query}`}>
                  Всі результати
                </Link>
              </div>
            </>
          )}
        </SearchResultDiv>
      )}
    </Search>
  );
};

import {
  MenuContainer,
  CloseButton,
  FlexContainer,
  List,
  FlexCatalogContainer,
  CategoriesList,
  LinkLarge,
  Contacts,
  Tel,
  Socials,
} from './Menu.styled';
import sprite from '../../../images/sprite.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from 'src/socialLinks';

export const Menu = ({ onClickHandle }) => {
  let language: string | null = 'ukr';
  let currency: string | null = 'uah';

  if (localStorage.getItem('language')) {
    language = localStorage.getItem('language');
  } else {
    localStorage.setItem('language', 'ukr');
  }

  if (localStorage.getItem('currency')) {
    currency = localStorage.getItem('currency');
  } else {
    localStorage.setItem('currency', 'uah');
  }

  const [isUkr, setIsUkr] = useState(language === 'ukr');
  const [isUah, setIsUah] = useState(currency === 'uah');

  const tempString: string | [] | null = localStorage.getItem('categories');
  const categories: [] | null = JSON.parse(tempString);

  const [showList, setShowList] = useState();
  console.log(categories);
  return (
    <MenuContainer>
      <CloseButton onClick={() => onClickHandle(false)}>
        <svg width={24} height={24}>
          <use href={`${sprite}#close`} />
        </svg>
      </CloseButton>
      <FlexContainer>
        <div>
          <h3>Мова</h3>
          <button
            type="button"
            disabled={isUkr}
            onClick={() => {
              localStorage.language = 'ukr';
              setIsUkr(true);
            }}
          >
            Українська
          </button>
          <button
            type="button"
            disabled={!isUkr}
            onClick={() => {
              localStorage.language = 'eng';
              setIsUkr(false);
            }}
          >
            English
          </button>
        </div>
        <div>
          <h3>Валюта</h3>
          <button
            type="button"
            disabled={isUah}
            onClick={() => {
              localStorage.currency = 'uah';
              setIsUah(true);
            }}
          >
            Українська гривня
          </button>
          <button
            type="button"
            disabled={!isUah}
            onClick={() => {
              localStorage.currency = 'usd';
              setIsUah(false);
            }}
          >
            Американський долар
          </button>
        </div>
      </FlexContainer>
      <nav>
        <List>
          <li>
            <FlexCatalogContainer>
              <h3>Каталог</h3>
              <button
                onClick={() => setShowList((prev) => !prev)}
                style={{
                  transform: showList ? 'rotate(90deg)' : 'rotate(270deg)',
                }}
              >
                <svg width={8} height={12}>
                  <use href={`${sprite}#chevron`} />
                </svg>
              </button>
            </FlexCatalogContainer>
            {showList && (
              <CategoriesList>
                {categories.map((el) => (
                  <li key={el.id_name}>
                    <Link to={`./catalog/${el.id_name}`}>{el.name}</Link>
                  </li>
                ))}
              </CategoriesList>
            )}
          </li>
          <li>
            <LinkLarge to={'/about'}>Про нас</LinkLarge>
          </li>
          <li>
            <LinkLarge to={'/delivery'}>Оплата & Доставка</LinkLarge>
          </li>
        </List>
      </nav>
      <Contacts>
        <h3>Зв’язатись з нами</h3>
        <address>
          <ul>
            <li>4b A. Farba St., Dnipro, Ukraine</li>

            <Tel>
              <a href="tel:+380955810075" title="Call +380955810075">
                +380 (95) 581-00-75
              </a>
            </Tel>
            <Socials>
              {socialLinks.map((el) => (
                <li key={el.social}>
                  <a href={el.href} target="_blank" rel="noopener noreferrer">
                    <svg width={24} height={24}>
                      <use href={`${sprite}#${el.social}`} />
                    </svg>
                  </a>
                </li>
              ))}
            </Socials>
          </ul>
        </address>
      </Contacts>
    </MenuContainer>
  );
};

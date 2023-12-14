import {
  FooterMainBlock,
  FooterEmailBlock,
  EmailBlock,
  MainFooter,
  List,
  Socials,
} from './footer.styled';
import { Link } from 'react-router-dom';
import sprite from '../../images/sprite.svg';

export const Footer = () => {
  const socialLinks = [
    {
      social: 'WhatsApp',
      href: 'https://api.whatsapp.com/send?phone=380671111111',
    },
    { social: 'Viber', href: 'viber://chat?number=380671111111' },
    { social: 'Telegram', href: 'https://t.me/carloteka' },
  ];

  return (
    <FooterMainBlock>
      <FooterEmailBlock>
        <h2>Приєднуйтеся до нашої розсилки</h2>
        <p>Та отримуйте інформацію про акції та розпродажі нашої компанії</p>
        <EmailBlock>
          <svg width={20} height={16}>
            <use href={`${sprite}#email`} />
          </svg>
          <input type="email" placeholder="Вкажіть ваш емейл"></input>
          <button type="submit">ПІДПИСАТИСЬ</button>
        </EmailBlock>
      </FooterEmailBlock>
      <MainFooter>
        <div>
          <h3>Адреса</h3>
          <address>
            <List>
              <li>
                <svg>
                  <use href={`${sprite}#geo`} />
                </svg>
                <p>Київ, вул. Хрещатик 1</p>
              </li>
              <li>
                <svg>
                  <use href={`${sprite}#clock`} />
                </svg>
                <p>Пн - Пт 9.00 - 19.00, Сб 09.0 - 17.00, Нд - вихідний</p>
              </li>
              <li>
                <svg>
                  <use href={`${sprite}#phone`} />
                </svg>
                <a href="tel:+380671111111" title="Call +380671111111">
                  +380671111111
                </a>
              </li>
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
            </List>
          </address>
        </div>
        <div>
          <h3>Про нас</h3>
          <List>
            <li>
              <Link to={'/about'}>Наша історія</Link>
            </li>
            <li>
              <Link to={'/exampleofwork'}>Що ми виготовляємо</Link>
            </li>
            <li>
              <Link to={'/policy'}>Політика конфіденційності</Link>
            </li>
          </List>
        </div>
        <div>
          <h3>Допомога</h3>
          <List>
            <li>
              <Link to={'/delivery'}>Оплата & Доставка</Link>
            </li>
            <li>
              <Link to={'/refund'}>Повернення & Відшкодування</Link>
            </li>
            <li>
              <Link to={'/help'}>Служба підтримки</Link>
            </li>
          </List>
        </div>
      </MainFooter>
    </FooterMainBlock>
  );
};

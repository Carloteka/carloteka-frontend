import {
  FooterMainBlock,
  FooterEmailBlock,
  EmailBlock,
  MainFooter,
  Address,
  AboutUs,
  Help,
} from "./footer.styled";

export const Footer = () => {
  return (
    <FooterMainBlock>
      <FooterEmailBlock>
        <h1>Приєднуйтеся до нашої розсилки</h1>
        <p>Та отримуйте інформацію про акції та розпродажі нашої компанії</p>
        <EmailBlock>
          {/* <img alt="email" src="img/email.png"></img> */}
          <input
            type="email"
            placeholder="Вкажіть ваш емейл"
            className="email_img"
          ></input>
          <button type="submit">ПІДПИСАТИСЬ</button>
        </EmailBlock>
      </FooterEmailBlock>
      <MainFooter>
        <Address>
          <h2>Адреса</h2>
          <div className="address_inf">
            <img src="img/location.png"></img>
            <p>Київ, вул. Хрещатик 1</p>
          </div>
          <div className="address_inf">
            <img src="img/call.png"></img>
            <p>+380671111111</p>
          </div>
          <div className="icons">
            <img src="img/viber.png"></img>
            <img src="img/whatsapp.png"></img>
            <img src="img/telegram.png"></img>
          </div>
        </Address>
        <AboutUs>
          <h2>Про нас</h2>
          <p>Наша історія</p>
          <p>Що ми виготовляємо</p>
          <p>Запитання & Відповіді</p>
        </AboutUs>
        <Help>
          <h2>Допомога</h2>
          <p>Потрібна допомога </p>
          <p>Повернення & Відшкодування</p>
          <p>Написати нам</p>
        </Help>
      </MainFooter>
    </FooterMainBlock>
  );
};

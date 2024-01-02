import { PageTitle } from 'src/components/PageTitle/PageTitle';
import { Link } from 'react-router-dom';
import {
  SectionAboutBrand,
  FirstP,
  Table,
  SectionAboutShop,
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
} from './AboutUs.styled';
import { ContainerLimiter } from '../../components/containerLimiter/ContainerLimiter';
import sprite from '../../images/sprite.svg';
// import imgPath from 'img/lamination-wood-grade-cylinders-manufacturer 1.jpg';

const AboutUs = () => {
  return (
    <>
      <PageTitle>Про нас</PageTitle>
      <ContainerLimiter paddingTopMob={'16px'} paddingTopDesc={'80px'}>
        <img
          src="src/images/lamination-wood-grade-cylinders-manufacturer 1.jpg"
          alt="lamination wood grade cylinders manufacturer"
          width={1312}
          height={800}
        />
        <SectionAboutBrand>
          <div>
            <FirstP>
              Carloteka - це український сімейний бренд, який подарував
              позитивні емоції сотням тисяч людей. Ми розробляємо унікальну
              продукцію, яка відрізняється високою якістю і створена з любов'ю
              до наших клієнтів.
            </FirstP>
            <p>
              Компанія Carloteka була заснована у Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Reprehenderit architecto impedit
              eius dolor eveniet, molestias repellendus officia consectetur
              perferendis nobis, tenetur quaerat laboriosam nisi optio iusto
              neque sint similique dolorum. Unde a ab dolor vel eveniet!
              Reiciendis rerum animi veniam quos incidunt necessitatibus
              officiis fuga, dolore, illum, omnis in. Nihil, iste. Magni illo
              eius saepe necessitatibus aspernatur eaque repellat deleniti esse
              a numquam rerum porro incidunt tempore in corrupti, suscipit
              pariatur obcaecati officia! Eius et officiis dolorum hic
              accusantium nostrum possimus unde, dolores, libero voluptatum nam
              consequuntur eos dignissimos enim repellat quo reiciendis fuga ad
              neque placeat iure nisi provident maxime? Iure quos eveniet aut
              assumenda omnis labore suscipit eius, sed impedit perferendis
              praesentium accusantium magni maiores voluptas quod error nobis
              ullam natus quam veritatis ab odit iste quaerat? Dolor a deserunt
              esse hic sint corrupti, aliquam nemo maiores animi vel. Delectus
              ducimus in velit, quo rem impedit reprehenderit.
            </p>
          </div>
          <div>
            <Table>
              <tr>
                <td>Назва компанії</td>
                <td>Карлотека</td>
              </tr>
              <tr>
                <td>Власник</td>
                <td>Зайцева Наталія</td>
              </tr>
              <tr>
                <td>Адреса</td>
                <td>
                  вул. А.Фарба 4б,<br></br> Дніпро, Україна
                </td>
              </tr>
              <tr>
                <td>Номер телефону</td>
                <td>
                  <a href="tel:+380955810075" title="Call +380955810075">
                    +380 (95) 581-00-75
                  </a>
                </td>
              </tr>
              <tr>
                <td>Відділ продажу</td>
                <td>
                  <a href="tel:+380955810075" title="Call +380955810075">
                    +380955810075
                  </a>
                  <a href="tel:+380955810075" title="Call +380955810075">
                    +380955810075
                  </a>
                  <a
                    href="mailto:info.carloteka@gmail.com"
                    title="mail to info.carloteka@gmail.com"
                  >
                    info.carloteka@gmail.com
                  </a>
                </td>
              </tr>
            </Table>
          </div>
        </SectionAboutBrand>
        <SectionAboutShop>
          <div>
            <FirstP>
              У нашому інтернет-магазині представлені тільки якісні дерев'яні
              вироби, в тому числі і власного виробництва з натурального дерева.
              У нас Ви можете купити або замовити іграшкові мечі, щити, машинки,
              пазли, 3Д пазли.
            </FirstP>
            <p>
              Ми виготовляємо для ресторанів, кафе, барів, магазинів будь-який
              посуд з дерева: підноси для піци, посуд для суші, підноси для
              подачі кави. Для Вашої компанії ми зробимо сувеніри або
              головоломки з Вашими логотипами, ексклюзивні брелоки і фірмові
              коробки для Вашої продукції.
            </p>
            <Link to={'/catalog'} title="На стрінку Товарів">
              Каталог
              <svg width={16} height={16}>
                <use href={`${sprite}#arrow-right`} />
              </svg>
            </Link>
          </div>
          <div>
            <Img1
              src="src/images/about-Group 1026.png"
              alt="a wooden amphora"
              width={229}
              height={343}
            />
            <Img2
              src="src/images/about-Group 1023.png"
              alt="a massive craft bound book"
              width={343}
              height={228}
            />
            <Img3
              src="src/images/about-Group 1027.png"
              alt="a wooden chessboard with chess"
              width={345}
              height={276}
            />
            <Img4
              src="src/images/about-Group 1025.png"
              alt="a craft backgammon board"
              width={345}
              height={276}
            />
            <Img5
              src="src/images/about-Group 1024.png"
              alt="a wooden phone stand"
              width={276}
              height={345}
            />
          </div>
        </SectionAboutShop>
      </ContainerLimiter>
    </>
  );
};

export default AboutUs;

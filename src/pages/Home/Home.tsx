import { useState, useEffect } from 'react';
import { Greeting } from '../../components/greeting';
import { CategoryCard } from '../../components/category-card';
import { PopularGoods } from '../../components/popularGoods';
// import categoryData from 'src/mockdata/categories.json';
import { CategorySection, List, Category } from './Home.styled';
import { ContainerLimiter } from '../../components/containerLimiter/ContainerLimiter';

type Categories = {
  mini_image: string;
  images: [{ image: string }];
  name: string;
  price: number;
  id_name: string;
  description: string;
};

const Home = () => {
  const [categories, setCategories] = useState<[] | Categories[]>([]);

  useEffect(() => {
    if (localStorage.getItem('categories')) {
      const item = JSON.parse(
        localStorage.getItem('categories') as string,
      ) as Categories[];
      setCategories(item);
    }
  }, []);
  // JSON.stringify(categoryData);

  return (
    <>
      <Greeting />
      <ContainerLimiter paddingTopMob="40px" paddingTopDesc={'88px'}>
        <CategorySection>
          <List>
            {categories?.map((el: Categories) => (
              <Category key={el.id_name}>
                <CategoryCard category={el} />
              </Category>
            ))}
          </List>
        </CategorySection>

        <PopularGoods width={4} />
      </ContainerLimiter>
    </>
  );
};

export default Home;

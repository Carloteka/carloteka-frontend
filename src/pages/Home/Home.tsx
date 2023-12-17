import { Greeting } from 'src/components/greeting/Greeting';
import { CategoryCard } from 'src/components/category-card/CategoryCard';
import { PopularGoods } from 'src/components/popularGoods';
import { useState, useEffect } from 'react';
import { fetchCategories } from 'src/api/api';
import categoryData from 'src/mockdata/categories.json';
import { CategorySection, List, Category } from './Home.styled';
import { ContainerLimiter } from 'src/components/containerLimiter/ContainerLimiter';

const Home = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    async function getCategories() {
      try {
        const data = await fetchCategories();
        console.log(data);
        localStorage.setItem('categories', JSON.stringify(data));
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    }
    getCategories();
  }, []);
  JSON.stringify(categoryData);

  return (
    <>
      <Greeting />
      <ContainerLimiter paddingTopMob={'40px'} paddingTopDesc={'88px'}>
        <CategorySection>
          <List>
            {categories?.map((el) => (
              <Category key={el.id}>
                <CategoryCard category={el} />
              </Category>
            ))}
          </List>
        </CategorySection>

        <PopularGoods />
      </ContainerLimiter>
    </>
  );
};

export default Home;

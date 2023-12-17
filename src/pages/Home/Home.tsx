import { useState, useEffect } from 'react';
import { Greeting } from 'src/components/greeting/Greeting';
import { CategoryCard } from 'src/components/category-card/CategoryCard';
import { PopularGoods } from 'src/components/popularGoods';
// import categoryData from 'src/mockdata/categories.json';
import { CategorySection, List, Category } from './Home.styled';
import { ContainerLimiter } from 'src/components/containerLimiter/ContainerLimiter';

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('categories')) {
      const item = JSON.parse(localStorage.getItem('categories'));
      setCategories(item);
    }
  }, []);
  // JSON.stringify(categoryData);

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

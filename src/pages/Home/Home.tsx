import { Greeting } from 'src/components/greeting/Greeting';
import { CategoryCard } from 'src/components/category-card/CategoryCard';
import { PopularGoods } from 'src/components/popularGoods';
import { useState, useEffect } from 'react';
import { fetchCategories } from 'src/api/api';
import categoryData from 'src/mockdata/categories.json';
import {
  LimiterConatiner,
  CategorySection,
  List,
  Category,
} from './Home.styled';

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
      <LimiterConatiner>
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
      </LimiterConatiner>
    </>
  );
};

export default Home;

import { Greeting } from 'src/components/greeting/Greeting';
import { CategoryCard } from 'src/components/category-card/CategoryCard';
import { PopularGoods } from 'src/components/popularGoods';
import { useState, useEffect } from 'react';
import { fetchCategories } from '../../api/api';
import categoryData from 'src/mockdata/categories.json';
import { LimiterConatiner, CategorySection } from './Home.styled';

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
          <ul>
            {categories?.map((el) => (
              <li key={el.id}>
                <CategoryCard category={el} />
              </li>
            ))}
          </ul>
        </CategorySection>

        <PopularGoods />
      </LimiterConatiner>
    </>
  );
};

export default Home;

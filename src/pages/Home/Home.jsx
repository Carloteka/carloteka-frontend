import { Greeting } from 'src/components/greeting/Greeting';
import { CategoryCard } from 'src/components/category-card/CategoryCard';
import { NewGoods } from 'src/components/newGoods';
import { PopularGoods } from 'src/components/popularGoods';
// import { useGetCategoriesQuery } from 'src/redux/categorySlice';

const Home = () => {
  // const { data: categories } = useGetCategoriesQuery();
  // console.log(categories);
  return (
    <>
      <Greeting />
      <CategoryCard order={0} />
      <CategoryCard order={1} />
      <CategoryCard order={0} />
      <PopularGoods />
      <NewGoods />
    </>
  );
};

export default Home;

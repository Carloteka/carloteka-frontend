import axios from 'axios';

axios.defaults.baseURL = import.meta.env.PROD
  ? 'https://carloteka.com/api'
  : 'http://localhost:8000/api';

export const fetchCategories = async () => {
  try {
    const response = await axios.get('/shop/categories/');
    const arrayData = response.data;
    return arrayData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPopularGoods = async () => {
  try {
    const response = await axios.get('/shop/items/');
    const arrayData = response.data.results;
    return arrayData;
  } catch (error) {
    console.log(error);
  }
};

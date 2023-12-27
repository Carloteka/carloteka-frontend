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

export const fetchAllGoods = async () => {
  try {
    console.log('fetchAllGoods');
    const response = await axios.get(
      '/shop/items/?page-size=100&category-id-name=ID_20231227171054457029_0&category-id-name=ID_20231227171054476111_1',
    );
    const arrayData = response.data.results;
    console.log(response);
    return arrayData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchFilteredGoods = async () => {
  try {
    const response = await axios.get('/shop/items/', {
      'page-size': 100,
      backorder: true,
      'specific-order': true,
      'category-id-name': 'ID_20231227171054457029_0,ID_20231227171054476111_1',
      'sort-by': 'price-down',
      'in-stock': true,
    });
    const arrayData = response.data.results;
    console.log(arrayData);
    return arrayData;
  } catch (error) {
    console.log(error);
  }
};

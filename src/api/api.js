import axios from 'axios';

axios.defaults.baseURL = import.meta.env.PROD
  ? 'http://carloteka.com/api'
  : 'http://localhost:8000/api';

export const fetchCategories = async () => {
  try {
    const response = await axios.get('/shop/categories/');
    const arrayData = response.data;
    // console.log(arrayData);
    return arrayData;
  } catch (error) {
    console.log(error.response);
  }
};

export const fetchItemDetails = async (slug) => {
  try {
    const response = await axios.get(`/shop/items/${slug}/`);
    const arrayData = response.data;
    console.log(arrayData);
    return arrayData;
  } catch (error) {
    console.log(error.response);
  }
};

export const fetchPopularGoods = async () => {
  const params = {
    limit: 12,
  };
  // console.log(Object.entries(params).map(([key, value]) => `${key}=${value}`));
  try {
    const response = await axios.get('/shop/items/', {
      params,
      paramsSerializer: function paramsSerializer(params) {
        return Object.entries(Object.assign({}, params))
          .map(([key, value]) => `${key}=${value}`)
          .join('&');
      },
    });

    const arrayData = response.data.results;
    return arrayData;
  } catch (error) {
    console.log(error.response);
  }
};

export const fetchAllGoods = async (limit) => {
  const params = {
    limit: limit || 100,
  };
  try {
    const response = await axios.get('/shop/items/', { params });
    const arrayData = response.data.results;
    // console.log(response);
    return { count: response.data.count, data: arrayData };
  } catch (error) {
    console.log(error.response);
  }
};

export const fetchFilteredGoods = async (search) => {
  const params = { limit: 12 };
  try {
    const response = await axios.get(`/shop/items/${search}`, { params });
    // console.log(response);
    const arrayData = response.data.results;
    return { count: response.data.count, data: arrayData };
  } catch (error) {
    console.log(error.response);
  }
};

export const postReview = async (slug, body) => {
  try {
    const response = await axios.post(
      `/shop/items/${slug}/reviews/create/`,
      body,
    );
    console.log(response);
    const arrayData = response.data.results;
    return { count: response.data.count, data: arrayData };
  } catch (error) {
    console.log(error.response);
  }
};

// ------  nova poshta -------------

export const fetchNPAreas = async () => {
  try {
    const response = await axios.get('/shop/np/areas/');
    const arrayData = response.data;
    return arrayData;
  } catch (error) {
    console.log(error.response);
  }
};

export const fetchNPSettlements = async (Ref) => {
  const params = { Ref };

  try {
    const response = await axios.get('/shop/np/settlements/', { params });
    const arrayData = response.data;
    return arrayData;
  } catch (error) {
    console.log(error.response);
  }
};

export const fetchNPWarehouses = async (SettlementRef) => {
  const params = { SettlementRef };

  try {
    const response = await axios.get('/shop/np/warehouses/', { params });
    const arrayData = response.data;
    // console.log(response.data);
    return arrayData;
  } catch (error) {
    console.log(error.response);
    if (error.response?.data?.detail?.detail[0] === 'To many requests') {
      return 500;
    }
    return error.response.status;
  }
};

export const createContact = async (body) => {
  try {
    const response = await axios.post('/shop/np/contact/create/', body);
    const arrayData = response.data;
    // console.log(response);
    return arrayData;
  } catch (error) {
    console.log(error.response);
    return error.response.status;
  }
};

export const createWaybill = async (body) => {
  try {
    const response = await axios.post('/shop/np/waybill/create/', body);
    const arrayData = response.data;
    return arrayData;
  } catch (error) {
    console.log(error.response);
    if (
      error.response?.data?.detail?.detail[0] ===
      'Recipient Warehouse max allowed volumeweight: 30'
    ) {
      return 'weightError';
    }
    return error.response.status;
  }
};

export const createOrder = async (body) => {
  try {
    const response = await axios.post('/shop/orders/create/', body);
    const arrayData = response.data;
    // console.log(response);
    return arrayData;
  } catch (error) {
    console.log(error.response);
    return error.response.status;
  }
};

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api/shop';
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/categories/');
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

// export const fetchContacts = async () => {
//   console.log('here');
//   try {
//     const response = await axios.get('/categories/?format=json');
//     console.log(response);
//     const arrayData = response.data;
//     return arrayData;
//   } catch (error) {
//     console.log(error);
//   }
// };

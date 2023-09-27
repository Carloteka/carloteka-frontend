import axios from 'axios'

export const fetchCategory = async () => {
  try {
    const response = await axios.get(
      'http://138.68.90.11/api/products/main_page_categories/?format=json',
    )
    const arrayData = response.data
    return arrayData
  } catch (error) {
    console.log(error)
  }
}

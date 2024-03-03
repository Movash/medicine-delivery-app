import axios from 'axios';

axios.defaults.baseURL = 'https://nodejs-medicine-delivery.onrender.com';

export async function getAll() {
  const { data } = await axios.get(`/api/drugstores`);
  return data;
}

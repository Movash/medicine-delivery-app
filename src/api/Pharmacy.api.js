import axios from 'axios';

axios.defaults.baseURL = 'https://nodejs-medicine-delivery.onrender.com';

export async function getAll() {
  const { data } = await axios.get(`/api/drugstores`);
  return data;
}

export async function addOrder(body) {
  try {
    const { data } = await axios.post(`/users`, body);
    return data;
  } catch (error) {
    console.error('Error in addProduct:', error);
    throw error;
  }
}


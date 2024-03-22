import axios from 'axios';
import { showToast } from 'helpers/toast';

axios.defaults.baseURL = 'https://nodejs-medicine-delivery.onrender.com';

export async function getAll() {
  const { data } = await axios.get(`/api/drugstores`);
  return data;
}

export async function addOrder(body) {
  try {
    const { data } = await axios.post(`/users`, body);
    showToast('success', 'Your order has been accepted');
    return data;
  } catch (error) {
    showToast('error', 'Something went wrong');
    throw error;
  }
}


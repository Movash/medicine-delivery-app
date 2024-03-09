import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://nodejs-medicine-delivery.onrender.com';

export async function getAll() {
  const { data } = await axios.get(`/api/drugstores`);
  return data;
}

export async function addOrder(body) {
  try {
    const { data } = await axios.post(`/users`, body);
    toast.success('Your order has been accepted', {
      duration: 3000,
      position: 'top-center',
    });
    return data;
  } catch (error) {
    toast.error('Something went wrong', {
      duration: 3000,
      position: 'top-center',
    });
    throw error;
  }
}


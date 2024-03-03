import * as yup from 'yup';

const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const phonePattern = /^\d{10}$/;

export const formSchema = yup.object().shape({
  name: yup.string().required('Required'),
  email: yup
    .string()
    .matches(emailPattern, 'Error email. Example: test@gmail.com')
    .required('Required'),
  phone: yup
    .string()
    .matches(phonePattern, 'Error phone. Example: 0971234567')
    .required('Required'),
  address: yup
    .string()
    .required('Required'),
});

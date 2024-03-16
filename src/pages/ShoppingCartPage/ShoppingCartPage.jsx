import {
  ShoppingCartCont,
  LeftBlock,
  RightBlock,
  AdditionalBlock,
  ContentCartCont,
  SubmitButton,
  SelectedTotal,
  SelectedTotalNumber,
} from './ShoppingCartPage.styled';
import UserForm from 'components/UserForm/UserForm';
import { useEffect, useState } from 'react';
import { getStorageData, setStorageData } from 'helpers/storage';
import { useFormik } from 'formik';
import { formSchema } from 'schemas/FormSchema/FormSchema';
import { addOrder } from 'api/Pharmacy.api';
import { ShopHeader } from 'styles/MainComponents/MainComponents.styled';
import ShoppingCartList from 'components/ShoppingCartList/ShoppingCartList';

const ShoppingCartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedCartItems = getStorageData('cartItems') || [];
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    const calculateTotalPrice = () => {
      let totalPrice = 0;
      cartItems.forEach(item => {
        totalPrice += item.price * (item.count || 1);
      });
      return totalPrice;
    };
    const totalPrice = calculateTotalPrice();
    setTotalPrice(totalPrice);
  }, [cartItems]);

  const handleRemoveFromCart = index => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    setStorageData('cartItems', updatedCartItems);
  };
  
  const onSubmit = async ({ name, email, phone, address }, actions) => {
    const orderedMedicines = cartItems.map(item => ({
      medicine: item.name,
      quantity: item.count || 1,
      price: item.price * (item.count || 1),
    }));

    const body = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      orderedMedicines: orderedMedicines,
      totalPrice: totalPrice,
    };

    await addOrder(body)
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
    },
    validationSchema: formSchema,
    onSubmit,
  });

  return (
    <ShoppingCartCont>
      <ContentCartCont>
        <LeftBlock>
          <UserForm formik={formik} />
        </LeftBlock>
        <RightBlock>
          <ShopHeader>Selected drugs</ShopHeader>
          <ShoppingCartList
            cartItems={cartItems}
            handleRemoveFromCart={handleRemoveFromCart}
            setCartItems={setCartItems}
          />
        </RightBlock>
      </ContentCartCont>
      <AdditionalBlock>
        <SelectedTotal>
          Total price: <SelectedTotalNumber>{totalPrice}$</SelectedTotalNumber>
        </SelectedTotal>
        <SubmitButton
          type="submit"
          disabled={formik.isSubmitting}
          form="userForm"
        >
          Submit
        </SubmitButton>
      </AdditionalBlock>
    </ShoppingCartCont>
  );
};

export default ShoppingCartPage;

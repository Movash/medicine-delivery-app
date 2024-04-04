import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { addOrder } from 'api/Pharmacy.api';
import UserForm from 'components/UserForm/UserForm';
import { getStorageData, setStorageData } from 'helpers/storage';
import { formSchema } from 'schemas/FormSchema/FormSchema';
import ShoppingCartList from 'components/ShoppingCartList/ShoppingCartList';
import { showToast } from 'helpers/toast';
import {
  ShoppingCartCont,
  LeftBlock,
  RightBlock,
  AdditionalBlock,
  ContentCartCont,
  SubmitButton,
  SelectedTotal,
  SelectedTotalNumber,
  EmptyCart,
  ShopsSpan,
  EmptyCartCont,
} from './ShoppingCartPage.styled';
import { ShopHeader } from 'styles/MainComponents/MainComponents.styled';

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

  const handleSubmit = () => {
    if (!formik.dirty || !formik.isValid) {
      showToast('error', 'Please fill in all required fields correctly');
      return;
    }
  };

  const onSubmit = async ({ name, email, phone, address }, actions) => {
    const orderedMedicines = cartItems.map(item => ({
      medicine: item.name,
      quantity: item.count || 1,
      price: item.price * (item.count || 1),
    }));

    if (orderedMedicines.length === 0) {
      showToast('error', 'Your cart is empty. Add some medicines');
      return;
    }

    const body = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      orderedMedicines: orderedMedicines,
      totalPrice: totalPrice,
    };

    await addOrder(body);

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
          {cartItems.length === 0 ? (
            <EmptyCartCont>
              <EmptyCart>
                Here is empty at this moment. Go to the{' '}
                <ShopsSpan>
                  <Link to="/">shops</Link>
                </ShopsSpan>{' '}
                page and select the medicine.
              </EmptyCart>
            </EmptyCartCont>
          ) : (
            <ShoppingCartList
              cartItems={cartItems}
              handleRemoveFromCart={handleRemoveFromCart}
              setCartItems={setCartItems}
            />
          )}
        </RightBlock>
      </ContentCartCont>
      <AdditionalBlock>
        <SelectedTotal>
          Total price: <SelectedTotalNumber>{totalPrice}$</SelectedTotalNumber>
        </SelectedTotal>
        <SubmitButton
          type="submit"
          disabled={formik.isSubmitting}
          onClick={handleSubmit}
          form="userForm"
        >
          Submit
        </SubmitButton>
      </AdditionalBlock>
    </ShoppingCartCont>
  );
};

export default ShoppingCartPage;

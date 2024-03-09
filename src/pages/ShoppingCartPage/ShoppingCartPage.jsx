import {
  ShoppingCartCont,
  LeftBlock,
  RightBlock,
  SelectedCardContainer,
  SelectedCardImage,
  CardTitleCont,
  CountCont,
  ButtonsCont,
  CounterButton,
  CountNumber,
  XButton,
  Price,
  AdditionalBlock,
  ContentCartCont,
  SelectedCardList,
  SubmitButton,
  SelectedTotal,
  SelectedTotalNumber,
} from './ShoppingCartPage.styled';
import { CardTitle, ShopHeader } from '../ShopsPage/ShopsPage.styled';
import placeholder from '../../images/stock-illustration-drugs-and-pills.jpg';
import UserForm from 'components/UserForm/UserForm';
import { useEffect, useState } from 'react';
import { getStorageData, setStorageData } from 'helpers/storage';
import sprite from '../../images/sprite.svg';
import { useFormik } from 'formik';
import { formSchema } from 'schemas/FormSchema/FormSchema';
import { addOrder } from 'api/Pharmacy.api';

const baseURL = 'https://nodejs-medicine-delivery.onrender.com';

const ShoppingCartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = getStorageData('cartItems') || [];
    setCartItems(storedCartItems);
  }, []);

  const handleAddOne = index => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].count = (updatedCartItems[index].count || 1) + 1;
    setCartItems(updatedCartItems);
    setStorageData('cartItems', updatedCartItems);
  };

  const handleSubtractOne = index => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].count = Math.max(
      updatedCartItems[index].count - 1,
      1
    );
    setCartItems(updatedCartItems);
    setStorageData('cartItems', updatedCartItems);
  };

  const handleRemoveFromCart = index => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    setStorageData('cartItems', updatedCartItems);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      totalPrice += item.price * (item.count || 1);
    });
    return totalPrice;
  };
  
  const onSubmit = async ({ name, email, phone, address }, actions) => {
    const orderedMedicines = cartItems.map(item => ({
      medicine: item.name,
      quantity: item.count || 1,
      price: item.price * (item.count || 1),
    }));

    const totalPrice = calculateTotalPrice();

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
          <SelectedCardList>
            {cartItems.map((medicine, index) => (
              <SelectedCardContainer key={medicine._id}>
                <XButton onClick={() => handleRemoveFromCart(index)}>
                  <svg width="32" height="32" viewBox="0 0 16 16">
                    <use href={`${sprite}#icon-x`} />
                  </svg>
                </XButton>
                <SelectedCardImage
                  src={
                    medicine.photo
                      ? `${baseURL}/${medicine.photo}`
                      : placeholder
                  }
                  alt={medicine.name}
                />
                <CardTitleCont>
                  <CardTitle>
                    {medicine.name.charAt(0).toUpperCase() +
                      medicine.name.slice(1)}
                  </CardTitle>
                  <Price>
                    Price: {medicine.price * (medicine.count || 1)}$
                  </Price>
                  <CountCont>
                    <CountNumber>{cartItems[index].count || 1}</CountNumber>
                    <ButtonsCont>
                      <CounterButton onClick={() => handleAddOne(index)}>
                        ⬆
                      </CounterButton>
                      <CounterButton onClick={() => handleSubtractOne(index)}>
                        ⬇
                      </CounterButton>
                    </ButtonsCont>
                  </CountCont>
                </CardTitleCont>
              </SelectedCardContainer>
            ))}
          </SelectedCardList>
        </RightBlock>
      </ContentCartCont>
      <AdditionalBlock>
        <SelectedTotal>
          Total price:{' '}
          <SelectedTotalNumber>{calculateTotalPrice()}$</SelectedTotalNumber>
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

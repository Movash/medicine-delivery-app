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
} from './ShoppingCartPage.styled';
import { CardTitle, CardList, ShopHeader } from '../ShopsPage/ShopsPage.styled';
import placeholder from '../../images/stock-illustration-drugs-and-pills.jpg';
import UserForm from 'components/UserForm/UserForm';
import { useEffect, useState } from 'react';
import { getStorageData, setStorageData } from 'helpers/storage';
import sprite from '../../images/sprite.svg';

const baseURL = 'https://nodejs-medicine-delivery.onrender.com';

const ShoppingCartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = getStorageData('cartItems') || [];
    setCartItems(storedCartItems);
  }, []);

    const handleAddOne = index => {
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].count++;
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

  return (
    <ShoppingCartCont>
      <LeftBlock>
        <UserForm />
      </LeftBlock>
      <RightBlock>
        <ShopHeader>Selected drugs</ShopHeader>
        <CardList>
          {cartItems.map((medicine, index) => (
            <SelectedCardContainer key={medicine._id}>
              <XButton onClick={() => handleRemoveFromCart(index)}>
                <svg width="32" height="32" viewBox="0 0 16 16">
                  <use href={`${sprite}#icon-x`} />
                </svg>
              </XButton>
              <SelectedCardImage
                src={
                  medicine.photo ? `${baseURL}/${medicine.photo}` : placeholder
                }
                alt={medicine.name}
              />
              <CardTitleCont>
                <CardTitle>
                  {medicine.name.charAt(0).toUpperCase() +
                    medicine.name.slice(1)}
                </CardTitle>
                <Price>Price: {medicine.price * (medicine.count || 1)}$</Price>
                <CountCont>
                  <CountNumber>{medicine.count}</CountNumber>
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
        </CardList>
      </RightBlock>
    </ShoppingCartCont>
  );
};

export default ShoppingCartPage;

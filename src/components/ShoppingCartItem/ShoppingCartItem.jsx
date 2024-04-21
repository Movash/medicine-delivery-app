import sprite from '../../images/sprite.svg';
import placeholder from '../../images/stock-illustration-drugs-and-pills.jpg';
import { setStorageData } from 'helpers/storage';
import { CartTitle } from 'styles/MainComponents/MainComponents.styled';
import {
  ButtonsCont,
  CartTitleCont,
  CountCont,
  CountNumber,
  CounterButton,
  Price,
  SelectedCartContainer,
  SelectedCartImage,
  XButton,
} from './ShoppingCartItem.styled';

const baseURL = 'https://nodejs-medicine-delivery.onrender.com';

const ShoppingCartItem = ({
  medicine,
  index,
  handleRemoveFromCart,
  setCartItems,
  cartItems,
}) => {
  const handleAddOne = () => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].count = (updatedCartItems[index].count || 1) + 1;
    setCartItems(updatedCartItems);
    setStorageData('cartItems', updatedCartItems);
  };

  const handleSubtractOne = () => {
    if (medicine.count > 1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].count = Math.max(
        updatedCartItems[index].count - 1,
        1
      );
      setCartItems(updatedCartItems);
      setStorageData('cartItems', updatedCartItems);
    }
  };

  return (
    <SelectedCartContainer>
      <XButton onClick={() => handleRemoveFromCart(index)}>
        <svg width="32" height="32" viewBox="0 0 16 16">
          <use href={`${sprite}#icon-x`} />
        </svg>
      </XButton>
      <SelectedCartImage
        src={medicine.photo ? `${baseURL}/${medicine.photo}` : placeholder}
        alt={medicine.name}
      />
      <CartTitleCont>
        <CartTitle>
          {medicine.name.charAt(0).toUpperCase() + medicine.name.slice(1)}
        </CartTitle>
        <Price>Price: {medicine.price * (medicine.count || 1)}$</Price>
        <CountCont>
          <CountNumber>{medicine.count || 1}</CountNumber>
          <ButtonsCont>
            <CounterButton onClick={() => handleAddOne()}>
              <svg width="12" height="12">
                <use href={`${sprite}#icon-arrow-top`} />
              </svg>
            </CounterButton>
            <CounterButton onClick={() => handleSubtractOne()}>
              <svg width="12" height="12">
                <use href={`${sprite}#icon-arrow-bottom`} />
              </svg>
            </CounterButton>
          </ButtonsCont>
        </CountCont>
      </CartTitleCont>
    </SelectedCartContainer>
  );
};

export default ShoppingCartItem;

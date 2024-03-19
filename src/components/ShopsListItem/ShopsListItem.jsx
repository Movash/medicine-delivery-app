import { getStorageData, setStorageData } from "helpers/storage";
import { AddButton, CardContainer, CardImage, PriceCont, SvgHeart } from "./ShopsListItem.styled";
import { useEffect, useState } from "react";
import sprite from '../../images/sprite.svg';
import placeholder from '../../images/stock-illustration-drugs-and-pills.jpg';
import { CartTitle } from "styles/MainComponents/MainComponents.styled";
import { showToast } from "helpers/toast";

const baseURL = 'https://nodejs-medicine-delivery.onrender.com';

const ShopsListItem = props => {
  const { medicine } = props;

  const [isHeartActive, setIsHeartActive] = useState(false);

  useEffect(() => {
    const favorites = getStorageData('favoriteMedicines') || [];
    setIsHeartActive(favorites.some(fav => fav.name === medicine.name));
  }, [medicine.name]);

  const handleAddToCart = medicine => {
    const cartItems = getStorageData('cartItems') || [];

    const isItemAlreadyAdded = cartItems.some(
      item => item.name === medicine.name
    );

    if (isItemAlreadyAdded) {
      showToast('error', 'Already added');
    } else {
      showToast('success', 'Successfully added to shopping cart');
      const updatedCartItems = [medicine, ...cartItems];
      setStorageData('cartItems', updatedCartItems);
    }
  };

  const toggleHeartActive = () => {
    setIsHeartActive(!isHeartActive);
    const favoriteMedicines = getStorageData('favoriteMedicines') || [];

    if (isHeartActive) {
      const updatedFavorites = favoriteMedicines.filter(
        fav => fav.name !== medicine.name
      );
      setStorageData('favoriteMedicines', updatedFavorites);
    } else {
      const updatedFavorites = [...favoriteMedicines, medicine];
      setStorageData('favoriteMedicines', updatedFavorites);
    }
  };

  return (
    <CardContainer>
      <SvgHeart $active={isHeartActive} onClick={toggleHeartActive}>
        <use
          href={`${sprite}#icon-heart-${isHeartActive ? 'active' : 'normal'}`}
        />
      </SvgHeart>
      <PriceCont>{medicine.price}$</PriceCont>
      <CardImage
        src={medicine.photo ? `${baseURL}/${medicine.photo}` : placeholder}
        alt={medicine.name}
      />
      <CartTitle>
        {medicine.name.charAt(0).toUpperCase() + medicine.name.slice(1)}
      </CartTitle>
      <AddButton onClick={() => handleAddToCart(medicine)}>
        Add to Cart
      </AddButton>
    </CardContainer>
  );
}

export default ShopsListItem
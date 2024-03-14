import { getStorageData, setStorageData } from "helpers/storage";
import { AddButton, CardContainer, CardImage, SvgHeart } from "./ShopsListItem.styled";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import sprite from '../../images/sprite.svg';
import placeholder from '../../images/stock-illustration-drugs-and-pills.jpg';
import { CardTitle } from "styles/MainComponents/MainComponents.styled";

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
      toast.error('Already added', {
        duration: 3000,
        position: 'top-center',
      });
    } else {
      toast.success('Successfully added to shopping cart', {
        duration: 3000,
        position: 'top-center',
      });
      const updatedCartItems = [...cartItems, medicine];
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
      <CardImage
        src={medicine.photo ? `${baseURL}/${medicine.photo}` : placeholder}
        alt={medicine.name}
      />
      <CardTitle>
        {medicine.name.charAt(0).toUpperCase() + medicine.name.slice(1)}
      </CardTitle>
      <AddButton onClick={() => handleAddToCart(medicine)}>
        Add to Cart
      </AddButton>
    </CardContainer>
  );
}

export default ShopsListItem
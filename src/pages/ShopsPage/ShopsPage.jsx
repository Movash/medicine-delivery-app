import React, { useEffect, useState } from 'react';
import {
  ShopsCont,
  LeftBlock,
  RightBlock,
  ShopList,
  ShopItem,
  CardContainer,
  CardImage,
  CardTitle,
  AddButton,
  CardList,
  ShopHeader,
} from './ShopsPage.styled';
import placeholder from '../../images/stock-illustration-drugs-and-pills.jpg';
import { getAll } from 'api/Pharmacy.api';
import Loader from 'components/Loader/Loader';
import { getStorageData, setStorageData } from 'helpers/storage';
import toast from 'react-hot-toast';

const baseURL = 'https://nodejs-medicine-delivery.onrender.com';

const ShopsPage = () => {
  const [shops, setShops] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedShop, setSelectedShop] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        setIsLoading(true);
        setError('');
        const data = await getAll();
        setShops(data);
        setSelectedShop(data[0]);
      } catch ({ message }) {
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAll();
  }, []);

  const handleShopSelect = shop => {
    setSelectedShop(shop);
  };

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

  return (
    <ShopsCont>
      {error && <h1>{error}</h1>}
      {isLoading && <Loader />}
      <LeftBlock>
        <ShopHeader>List of pharmacies</ShopHeader>
        <ShopList>
          {shops.map(shop => (
            <ShopItem key={shop._id} onClick={() => handleShopSelect(shop)}>
              {shop.pharmacy}
            </ShopItem>
          ))}
        </ShopList>
      </LeftBlock>
      {selectedShop && (
        <RightBlock>
          <ShopHeader>Medicines in {selectedShop.pharmacy}</ShopHeader>
          <CardList>
            {selectedShop.medicines.map(medicine => (
              <CardContainer key={medicine._id}>
                <CardImage
                  src={
                    medicine.photo
                      ? `${baseURL}/${medicine.photo}`
                      : placeholder
                  }
                  alt={medicine.name}
                />
                <CardTitle>
                  {medicine.name.charAt(0).toUpperCase() +
                    medicine.name.slice(1)}
                </CardTitle>
                <AddButton onClick={() => handleAddToCart(medicine)}>
                  Add to Cart
                </AddButton>
              </CardContainer>
            ))}
          </CardList>
        </RightBlock>
      )}
    </ShopsCont>
  );
};

export default ShopsPage;

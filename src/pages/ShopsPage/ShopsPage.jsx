import React, { useEffect, useState } from 'react';
import { getAll } from 'api/Pharmacy.api';
import Loader from 'components/Loader/Loader';
import ShopsList from 'components/ShopsList/ShopsList';
import {
  ShopsCont,
  LeftBlock,
  RightBlock,
  ShopList,
  ShopItem,
} from './ShopsPage.styled';
import { ShopHeader } from 'styles/MainComponents/MainComponents.styled';

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
          <ShopsList selectedShop={selectedShop} />
        </RightBlock>
      )}
    </ShopsCont>
  );
};

export default ShopsPage;

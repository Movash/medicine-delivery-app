import React, { useState } from 'react';
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

  const shops = [
    {
      id: 1,
      name: 'Аптека 1',
      products: [
        { id: 1, name: 'Продукт 1 аптека 1' },
        { id: 2, name: 'Продукт 2 аптека 1' },
        { id: 3, name: 'Продукт 3 аптека 1' },
      ],
    },
    {
      id: 2,
      name: 'Аптека 2',
      products: [
        { id: 4, name: 'Продукт 1 аптека 2' },
        { id: 5, name: 'Продукт 2 аптека 2' },
        { id: 6, name: 'Продукт 3 аптека 2' },
      ],
    },
    {
      id: 3,
      name: 'Аптека 3',
      products: [
        { id: 7, name: 'Продукт 1 аптека 3' },
        { id: 8, name: 'Продукт 2 аптека 3' },
        { id: 9, name: 'Продукт 3 аптека 3' },
      ],
    },
  ];

const ShopsPage = () => {
  const [selectedShop, setSelectedShop] = useState(shops[0]);

  const handleShopSelect = shop => {
    setSelectedShop(shop);
  };



  return (
    <ShopsCont>
      <LeftBlock>
        <ShopHeader>Список аптек</ShopHeader>
        <ShopList>
          {shops.map(shop => (
            <ShopItem key={shop.id} onClick={() => handleShopSelect(shop)}>
              {shop.name}
            </ShopItem>
          ))}
        </ShopList>
      </LeftBlock>
      <RightBlock>
        {selectedShop && (
          <>
            <ShopHeader>Товари в {selectedShop.name}</ShopHeader>
              <CardList>
                {selectedShop.products.map(product => (
                  <CardContainer key={product.id}>
                    <CardImage src={placeholder} alt={product.name} />
                    <CardTitle>{product.name}</CardTitle>
                    <AddButton>Додати</AddButton>
                  </CardContainer>
                ))}
              </CardList>
          </>
        )}
      </RightBlock>
    </ShopsCont>
  );
};

export default ShopsPage;

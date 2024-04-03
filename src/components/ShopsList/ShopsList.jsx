import { useEffect, useState } from 'react';
import ShopsListItem from 'components/ShopsListItem/ShopsListItem';
import { getStorageData } from 'helpers/storage';
import Filter from 'components/Filter/Filter';
import { CardList } from './ShopsList.styled';

const ShopsList = ({ selectedShop }) => {
  const [sortedMedicines, setSortedMedicines] = useState(
    selectedShop.medicines
  );

  useEffect(() => {
    setSortedMedicines(selectedShop.medicines);
  }, [selectedShop]);

  const favoriteMedicines = new Set(
    getStorageData('favoriteMedicines')?.map(med => med.name) || []
  );

  const sortedMedicinesByFav = sortedMedicines.sort((a, b) => {
    const aIsFavorite = favoriteMedicines.has(a.name);
    const bIsFavorite = favoriteMedicines.has(b.name);

    return aIsFavorite === bIsFavorite ? 0 : aIsFavorite ? -1 : 1;
  });

  return (
    <>
      <Filter
        medicines={selectedShop.medicines}
        setSortedMedicines={setSortedMedicines}
      />
      <CardList>
        {sortedMedicinesByFav.map(medicine => (
          <ShopsListItem medicine={medicine} key={medicine._id} />
        ))}
      </CardList>
    </>
  );
};

export default ShopsList;

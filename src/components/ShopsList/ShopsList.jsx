import ShopsListItem from 'components/ShopsListItem/ShopsListItem';
import { getStorageData } from 'helpers/storage';
import { CardList } from 'pages/ShopsPage/ShopsPage.styled';

const ShopsList = props => {
  const { selectedShop } = props;
  // const favoriteMedicines = new Set(
  //   (getStorageData('favoriteMedicines') || []).map(med => med._id)
  // );
  const favoriteMedicines = new Set(
    getStorageData('favoriteMedicines')?.map(med => med.name) || []
  );

  const sortedMedicines = selectedShop.medicines.sort((a, b) => {
    const aIsFavorite = favoriteMedicines.has(a.name);
    const bIsFavorite = favoriteMedicines.has(b.name);

    return aIsFavorite === bIsFavorite ? 0 : aIsFavorite ? -1 : 1;
  });
  
  return (
    <>
      <CardList>
        {sortedMedicines.map(medicine => (
          <ShopsListItem medicine={medicine} key={medicine._id} />
        ))}
      </CardList>
    </>
  );
};

export default ShopsList;

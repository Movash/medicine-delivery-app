import {
  ShoppingCartCont,
  LeftBlock,
  RightBlock,
} from './ShoppingCartPage.styled';
import {
  CardContainer,
  CardImage,
  CardTitle,
  AddButton,
  CardList,
  ShopHeader,
} from '../ShopsPage/ShopsPage.styled';
import placeholder from '../../images/stock-illustration-drugs-and-pills.jpg';
import UserForm from 'components/UserForm/UserForm';

const ShoppingCartPage = () => {
  return (
    <ShoppingCartCont>
      <LeftBlock>
        <UserForm />
      </LeftBlock>
      <RightBlock>
        <ShopHeader>Товари</ShopHeader>
        <CardList>
          <CardContainer>
            <CardImage src={placeholder} alt='img' />
            <CardTitle>name</CardTitle>
            <AddButton>Додати</AddButton>
          </CardContainer>
        </CardList>
      </RightBlock>
    </ShoppingCartCont>
  );
};

export default ShoppingCartPage
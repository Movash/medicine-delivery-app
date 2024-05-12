import { HeaderLink, HeaderNav } from './Header.styled';

const Header = () => {
  return (
    <HeaderNav>
      <div>
        <HeaderLink to="/">Shops</HeaderLink>
        <HeaderLink to="shoppingCart">Shopping Cart</HeaderLink>
        <HeaderLink to="history">History</HeaderLink>
      </div>
    </HeaderNav>
  );
};

export default Header;

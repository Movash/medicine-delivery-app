import { NavLink } from 'react-router-dom';
import { Nav } from './Header.styled';

const Header = () => {
  return (
    <Nav>
      <div>
        <NavLink to="/">Shops</NavLink>
        <NavLink to="shoppingCart">Shopping Cart</NavLink>
        <NavLink to="history">History</NavLink>
      </div>
    </Nav>
  );
};

export default Header;

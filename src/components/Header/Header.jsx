import { NavLink } from 'react-router-dom';
import { Nav } from './Header.styled';

const Header = () => {
  return (
    <Nav>
      <div>
        <NavLink to="/">Shops</NavLink>
        <NavLink to="shoppingCart">Shopping Cart</NavLink>
      </div>
    </Nav>
  );
};

export default Header;

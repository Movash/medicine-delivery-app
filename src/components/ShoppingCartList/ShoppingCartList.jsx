import ShoppingCartItem from "components/ShoppingCartItem/ShoppingCartItem";
import { SelectedCartList } from "./ShoppingCartList.styled";

const ShoppingCartList = ({ cartItems, handleRemoveFromCart, setCartItems }) => {

  return (
    <SelectedCartList>
      {cartItems.map((medicine, index) => (
        <ShoppingCartItem
          medicine={medicine}
          key={medicine._id}
          index={index}
          handleRemoveFromCart={handleRemoveFromCart}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
    </SelectedCartList>
  );
}

export default ShoppingCartList
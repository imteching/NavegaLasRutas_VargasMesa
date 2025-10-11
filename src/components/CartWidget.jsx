import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/styles.css";

export default function CartWidget() {
  const { cartQuantity } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <FaShoppingCart />
      <span>{cartQuantity}</span>
    </div>
  );
}

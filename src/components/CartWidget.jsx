import { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import "../styles/styles.css";

export default function CartWidget() {
  const { cart, cartQuantity } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="cart-widget"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <FaShoppingCart className="cart-icon" />
      {cartQuantity > 0 && <span className="cart-count">{cartQuantity}</span>}

      {isOpen && (
        <div className="cart-dropdown">
          {cart.length === 0 ? (
            <p>Tu carrito está vacío 🛍</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <img src={item.img} alt={item.name} />
                  <div>
                    <p>{item.name}</p>
                    <p>
                      {item.quantity} × ${item.price}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

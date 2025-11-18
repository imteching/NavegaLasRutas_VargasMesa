import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, totalPrice } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h1>Tu carrito</h1>

      {cart.lenght === 0 ? (
        <p>No tienes productos en el carrito.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} />
              <div>
                <h2>{item.name}</h2>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.price}</p>
              </div>
            </div>
          ))}
          <h2>Total: ${totalPrice()}</h2>
          <Link to="/checkout" className="checkout-btn">
            Proceder al pago
          </Link>
        </div>
      )}
    </div>
  );
}

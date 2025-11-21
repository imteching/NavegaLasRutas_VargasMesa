import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, totalPrice, removeFromCart, clearCart } =
    useContext(CartContext);

  return (
    <div className="cart-page">
      <h1>Tu carrito</h1>

      {cart.length === 0 ? (
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
                <button
                  className="delete-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          <h2>Total: ${totalPrice()}</h2>
          <button className="clear-btn" onClick={clearCart}>
            Vaciar carrito
          </button>
          <Link to="/checkout" className="checkout-btn">
            Proceder al pago
          </Link>
        </div>
      )}
    </div>
  );
}

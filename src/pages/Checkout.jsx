import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../services/firebase";

export default function Checkout() {
  const { cart, cartQuantity, totalPrice, clearCart } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.email || !buyer.phone) {
      alert("Por favor completa todos los campos");
      return;
    }

    setLoading(true);

    const order = {
      buyer,
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      date: Timestamp.now(),
      total: totalPrice(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.log("Error guardando la orden", error);
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div className="checkout-success">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es:</p>
        <strong>{orderId}</strong>
      </div>
    );
  }

  if (cart.length === 0) {
    return <h2>Tu carrito está vacío</h2>;
  }

  return (
    <div className="checkout-container">
      <h2>Finalizar compra</h2>

      <div className="checkout-content">
        <form onSubmit={handleSubmit} className="checkout-form">
          <label>
            Nombre:
            <input name="name" value={buyer.name} onChange={handleChange} />
          </label>

          <label>
            Email:
            <input name="email" value={buyer.email} onChange={handleChange} />
          </label>

          <label>
            WhatsApp:
            <input name="phone" value={buyer.phone} onChange={handleChange} />
          </label>

          <button type="submit" disabled={loading}>
            {loading ? "Procesando..." : "Confirmar compra"}
          </button>
        </form>

        <div className="checkout-summary">
          <h3>Resumen del pedido</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} × ${item.price}
              </li>
            ))}
          </ul>

          <h3>Total: ${totalPrice()}</h3>
        </div>
      </div>
    </div>
  );
}

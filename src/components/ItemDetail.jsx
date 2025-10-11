import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import "../styles/styles.css";

export default function ItemDetail({ product }) {
  const [message, setMessage] = useState("");
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (quantity) => {
    addToCart(product, quantity);

    setMessage(
      `Agregaste ${quantity} unidad(es) de ${product.name} al carrito`
    );

    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <div className="item-detail-container">
      <img src={product.img} alt={product.name} />
      <div className="item-detail-info">
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />

        {message && <p className="add-message">{message}</p>}
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Item({ product }) {
  return (
    <div className="item-card">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/item/${product.id}`}>Ver detalle</Link>
    </div>
  );
}

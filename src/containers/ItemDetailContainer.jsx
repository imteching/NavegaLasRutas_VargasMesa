import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import ItemDetail from "../components/ItemDetail";

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = new Promise((resolve) => {
      setTimeout(() => {
        const found = products.find((p) => p.id === parseInt(itemId));
        resolve(found);
      }, 1000);
    });

    getProduct.then((res) => setProduct(res));
  }, [itemId]);
  return product ? (
    <ItemDetail product={product} />
  ) : (
    <p>Cargando producto...</p>
  );
}

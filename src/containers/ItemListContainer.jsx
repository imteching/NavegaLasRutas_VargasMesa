import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import ItemList from "../components/ItemList";

export default function ItemDetailContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          categoryId
            ? products.filter((p) => p.category === categoryId)
            : products
        );
      }, 500);
    });

    getProducts.then((res) => setItems(res));
  }, [categoryId]);

  return <ItemList items={items} />;
}

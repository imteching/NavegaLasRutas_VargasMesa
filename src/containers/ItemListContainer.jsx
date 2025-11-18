import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebase";
import ItemList from "../components/ItemList";

export default function ItemDetailContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const bolsosRef = collection(db, "bolsos");
        let q;

        if (categoryId) {
          q = query(bolsosRef, where("category", "==", categoryId));
        } else {
          q = bolsosRef;
        }

        const querySnapshot = await getDocs(q);

        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItems(productsData);
      } catch (error) {
        console.error("Error obteniendo los productos:", error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return <ItemList items={items} />;
}

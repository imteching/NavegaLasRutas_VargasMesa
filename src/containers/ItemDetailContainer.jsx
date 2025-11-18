import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import ItemDetail from "../components/ItemDetail";

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const ref = doc(db, "bolsos", itemId);
        const snapshot = await getDoc(ref);

        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        } else {
          console.log("Producto no encontrado");
        }
      } catch (error) {
        console.error("Error obteniendo detalle del producto:", error);
      }
    };

    fetchProduct();
  }, [itemId]);
  return product ? (
    <ItemDetail product={product} />
  ) : (
    <p>Cargando producto...</p>
  );
}

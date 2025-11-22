import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleProduct() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => console.log(res));
  }, [id]);

  return <h1>Prodotto {id}</h1>;
}

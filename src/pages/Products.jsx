import axios from "axios";
import { useState } from "react";

export default function Products() {
  const [productsList, setProductsList] = useState([]);
  useState(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProductsList(res.data));
  }, []);

  return (
    <section>
      <div className="container">
        <h1>Products</h1>
        <div className="procucts-container">
          <ul className="grid grid-cols-4">
            {productsList.map((product) => (
              <li key={product.id} className="product-card">
                <div className="card-image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="card-text">{product.title}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

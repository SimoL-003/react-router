import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [productsList, setProductsList] = useState([]);
  useState(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProductsList(res.data));
  }, []);

  return (
    <section className="bg-slate-100 py-10">
      <div className="container">
        <hgroup className="mb-8">
          <h1>Our products</h1>
          <h2>Choose our products</h2>
        </hgroup>

        <div className="procucts-container">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsList.map((product) => (
              // PRODUCT CARD
              <li
                key={product.id}
                className="rounded-lg bg-white shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-300"
              >
                <Link to={`/products/${product.id}`} className="block p-8">
                  {/* Card img */}
                  <div className="flex justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-[200px] aspect-square object-contain"
                    />
                  </div>

                  {/* Card text */}
                  <div className="mt-4">
                    <h3 className="py-1">{product.title}</h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

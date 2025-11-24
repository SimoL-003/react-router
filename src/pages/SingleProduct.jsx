import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SingleProductLoader from "../components/loaders/SingleProductLoader";

export default function SingleProduct() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setSingleProduct(res.data);
      setLoading(false);
    });
  }, [id]);

  return (
    <section className="min-h-screen bg-slate-100 py-8">
      {loading ? (
        <SingleProductLoader />
      ) : (
        <div className="container">
          <div>
            <Link
              to={"/products"}
              className="button button--secondary text-end"
            >
              Return to product list &crarr;
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-2/5 p-8">
              <img src={singleProduct.image} alt={singleProduct.title} />
            </div>
            <div className="w-3/5 p-16">
              <p className="my-6 text-sm uppercase tracking-wide text-slate-500">
                {singleProduct.category}
              </p>
              <h2 className="my-6 text-4xl font-bold text-slate-900">
                {singleProduct.title}
              </h2>
              <p className="my-6 text-3xl font-semibold text-slate-900">
                {singleProduct.price} $
              </p>
              <p className="my-6 text-lg text-slate-600 leading-relaxed">
                {singleProduct.description}
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <Link
              to={`/products/${singleProduct.id - 1}`}
              className="button button--secondary"
            >
              &larr; Previous product
            </Link>
            <Link
              to={`/products/${singleProduct.id + 1}`}
              className="button button--secondary"
            >
              Next product &rarr;
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

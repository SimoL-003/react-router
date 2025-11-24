import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SingleProductLoader from "../components/loaders/SingleProductLoader";

export default function SingleProduct() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [productsList, setProductsList] = useState([]);

  const firstProduct = true;
  const lastProduct = true;

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setSingleProduct(res.data);
      setLoading(false);
    });
  }, [id]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProductsList(res.data);
    });
  }, []);

  const firstId = productsList[0]?.id;
  const lastId = productsList[productsList.length - 1]?.id;

  const isFirst = singleProduct?.id === firstId;
  const isLast = singleProduct?.id === lastId;

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
              to={isFirst ? "" : `/products/${singleProduct.id - 1}`}
              className="button button--secondary"
              aria-disabled={isFirst}
            >
              &larr; Previous product
            </Link>
            <Link
              to={isLast ? "" : `/products/${singleProduct.id + 1}`}
              className="button button--secondary"
              aria-disabled={isLast}
            >
              Next product &rarr;
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

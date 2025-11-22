import Home from "../../pages/Home";
import AboutUs from "../../pages/AboutUs";
import Products from "../../pages/Products";
import { NavLink } from "react-router-dom";

export default function Header() {
  const nav = [
    {
      path: "/",
      page: <Home />,
    },
    {
      path: "/about-us",
      page: <AboutUs />,
    },
    {
      path: "/products",
      page: <Products />,
    },
  ];

  return (
    <header className="min-h-20 bg-blue-300 flex items-center justify-center">
      <nav>
        <ol className="flex gap-16 items-center">
          {nav.map((cur, index) => (
            <li key={index}>
              <NavLink to={cur.path}>{cur.page}</NavLink>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
}

import { Link } from "react-router-dom";
import banner from "../assets/images/banner-img2.jpg";
const PageHeader = ({ pageTitle }) => {
  const items = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Electronics", href: "/products/electronics" },
    { name: "Laptops", href: "#" },
  ];
  return (
    <section id="banner" style={{ backgroundImage: `url(${banner})` }}>
      <div className="container mx-auto px-4 padding-medium-2">
        <div className="hero-content">
          <h2 className="font-bold display-1 font-josefin mt-5 mb-0">
            {pageTitle}
          </h2>
          <nav className="breadcrumb">
            <ol className="list-reset flex">
              <li className="flex items-center">
                <>
                  <Link to="/" className="breadcrumb-item nav-link">Home</Link>
                  <span className="mx-2 text-gray-300">/</span>
                </>
                <span className="breadcrumb-item active" aria-current="page">{pageTitle}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;

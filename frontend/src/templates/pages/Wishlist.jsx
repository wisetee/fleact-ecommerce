import { Icon } from '@iconify/react';
import item1 from "../../assets/images/item1.jpg";
import item2 from "../../assets/images/item2.jpg";
import item3 from "../../assets/images/item3.jpg";
import item4 from "../../assets/images/item4.jpg";
import PageHeader from '../PageHeader';

const Wishlist = () => {
  const products = [
    {
      id: 1,
      name: "Sweatshirt",
      price: "$230.00",
      stock: "In Stock",
      image: item1,
    },
    {
      id: 2,
      name: "Black T-shirt",
      price: "$100.00",
      stock: "In Stock",
      image: item2,
    },
    {
      id: 3,
      name: "Printed T-shirt",
      price: "$190.00",
      stock: "Out of Stock",
      image: item3,
    },
    {
      id: 4,
      name: "Flee Sweatshirt",
      price: "$250.00",
      stock: "In Stock",
      image: item4,
    },
  ];

  return (
    <>
      <PageHeader pageTitle={"Wishlist"} />
      <section id="Wishlist" className="py-5 my-5">
        <div className="container mx-auto px-4">
          <div className="wish-list-wrapper">
            {products.map((product) => (
              <div key={product.id} className="item">
                {/* Product Image */}
                <div className="row-start-1 row-span-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>
                {/* Product Details */}
                <div className="col-start-2 col-end-4 md:row-start-1">
                  <h5 className="product-title">
                    <a href="#" className=" hover:underline">
                      {product.name}
                    </a>
                  </h5>
                </div>

                {/* Price and Stock Status */}
                <div className="row-start-2 col-start-2 col-end-4 md:row-start-1 md:col-start-5 md:col-end-6">
                  <p className="text-base md:text-xl text-gray-500">
                    {product.price}
                  </p>
                </div>
                <div className="row-start-3 col-start-2 col-end-4 md:row-start-1 md:col-start-6 md:col-end-7">
                  <p
                    className={`text-md font-medium ${
                      product.stock === "In Stock"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {product.stock}
                  </p>
                </div>

                {/* Add to Cart and Remove Buttons */}
                <div className="row-start-2 md:row-start-1 md:col-start-7 md:col-end-8 flex justify-between items-center">
                  <button className="hidden lg:inline-block btn-dark">
                    Add to Cart
                  </button>
                  <button className="lg:hidden text-gray-600">
                    <Icon icon='mdi:add-shopping-cart' width='24px' height='24px'/>
                  </button>
                  <a href="#" className="ml-4 text-gray-600 hover:text-red-500">
                    <Icon icon='gravity-ui:trash-bin' width='24px' height='24px'/>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;

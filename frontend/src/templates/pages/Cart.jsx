import { useState } from "react";
import { Icon } from "@iconify/react";
import item1 from "../../assets/images/item1.jpg";
import item2 from "../../assets/images/item2.jpg";
import item3 from "../../assets/images/item3.jpg";
import item4 from "../../assets/images/item4.jpg";
import PageHeader from "../PageHeader";

const Cart = () => {
  const products = [
    {
      id: 1,
      name: "Sweatshirt Sweatshirt",
      price: "$230.00",
      size: "M",
      stock: "In Stock",
      quantity: 1,
      image: item1,
    },
    {
      id: 2,
      name: "Black T-shirt",
      price: "$100.00",
      size: "M",
      stock: "In Stock",
      quantity: 1,
      image: item2,
    },
    {
      id: 3,
      name: "Printed T-shirt",
      price: "$190.00",
      size: "M",
      stock: "Out of Stock",
      quantity: 1,
      image: item3,
    },
    {
      id: 4,
      name: "Flee Sweatshirt",
      price: "$250.00",
      size: "M",
      stock: "In Stock",
      quantity: 1,
      image: item4,
    },
  ];

  const [cartItems, setCartItems] = useState(products);

  // Increase quantity
  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <>
      <PageHeader pageTitle={"Cart"} />
      <section id="Cart" className="py-5 my-5">
        <div className="container mx-auto px-4">
          <div className="cart-items-wrapper">
            {cartItems.map((item) => (
              <div key={item.id} className="item">
                {/* item Image */}
                <div className="row-start-1 row-span-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>
                {/* item Details */}
                <div className="col-start-2 col-end-4 md:row-start-1">
                  <h5 className="item-title">
                    <a href="#" className=" hover:underline">
                      {item.name}
                    </a>
                  </h5>
                  <div>
                    Size:
                    <a href="#" className="ml-1 hover:underline">
                      {item.size}
                    </a>
                  </div>
                </div>

                {/* Price and Stock Status */}
                <div className="row-start-2 col-start-2 col-end-4 md:row-start-1 md:col-start-4 md:col-end-5">
                  <p className="text-base md:text-xl text-gray-500">
                    {item.price}
                  </p>
                </div>

                {/* Add to Cart and Remove Buttons */}
                <div className="row-span-3 col-start-4 md:row-start-1 md:col-start-5 md:col-end-7">
                  <div className="flex flex-col-reverse items-center justify-center md:flex-row">
                    {item.quantity == 1 && (
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-gray-600 rounded-full hover:bg-gray-100"
                      >
                        <Icon
                          icon="gravity-ui:trash-bin"
                          width="20"
                          height="20"
                        />
                      </button>
                    )}
                    {item.quantity > 1 && (
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="p-2 text-gray-600 rounded-full hover:bg-gray-100"
                      >
                        <Icon icon="ic:round-minus" width="24" height="24" />
                      </button>
                    )}
                    <input
                      type="text"
                      value={item.quantity}
                      readOnly
                      className="w-12 text-center"
                    />
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="p-2 text-gray-600 rounded-full hover:bg-gray-100"
                    >
                      <Icon icon="ic:round-plus" width="24" height="24" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;

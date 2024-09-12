import item1 from "../assets/images/item1.jpg";
import item2 from "../assets/images/item2.jpg";
import item3 from "../assets/images/item3.jpg";
import item4 from "../assets/images/item4.jpg";

const NewArrival = () => {
  return (
    <section id="new-arrival" class="py-16">
      <div class="container mx-auto">
        <h2 class="section-title">
          New Arrivals
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="product-card">
            <div class="">
              <img
                src={item1}
                alt="Books"
                class="w-full h-auto"
              />
              <div class="p-4">
                <div class="flex justify-between items-center">
                  <div class="flex space-x-2">
                    <a href="single-product.html" class="hover:text-gray-700">
                      <i class="icon icon-screen-full"></i>
                    </a>
                    <a href="#" class="hover:text-gray-700">
                      <i class="icon icon-heart"></i>
                    </a>
                  </div>
                </div>
                <div class="flex justify-between items-center mt-4">
                  <h4 class="text-lg font-medium">
                    <a href="single-product.html">Seven Zero Five</a>
                  </h4>
                  <p class="text-xl font-bold">$40.00</p>
                </div>
              </div>
            </div>
            <div class="product-badge">
              New
            </div>
          </div>
          <div class="product-card">
            <div class="">
              <img
                src={item2}
                alt="Books"
                class="w-full h-auto"
              />
              <div class="p-4">
                <div class="flex justify-between items-center">
                  <div class="flex space-x-2">
                    <a href="single-product.html" class="hover:text-gray-700">
                      <i class="icon icon-screen-full"></i>
                    </a>
                    <a href="#" class="hover:text-gray-700">
                      <i class="icon icon-heart"></i>
                    </a>
                  </div>
                </div>
                <div class="flex justify-between items-center mt-4">
                  <h4 class="text-lg font-medium">
                    <a href="single-product.html">Seven Zero Five</a>
                  </h4>
                  <p class="text-xl font-bold">$40.00</p>
                </div>
              </div>
            </div>
            <div class="product-badge">
              New
            </div>
          </div>
        </div>
        <div class="text-center mt-12">
          <button
            type="submit"
            class="btn-dark"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;

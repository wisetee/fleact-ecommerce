import { Icon } from '@iconify/react'
import item1 from "../assets/images/item1.jpg";
import item2 from "../assets/images/item2.jpg";
import item3 from "../assets/images/item3.jpg";
import item4 from "../assets/images/item4.jpg";

const NewArrival = () => {
  return (
    <section id="new-arrival" class="py-16">
      <div class="container mx-auto">
        <h2 class="section-title">New Arrivals</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="product-card product-item">
            <a href="/single-product">
              <img src={item1} alt="Books" class="w-full h-auto" />
              <div class="product-detail">
                <div class="flex justify-between items-start mt-6">
                  <h4 class="product-title">
                    <a href="single-product.html">Seven Zero Five</a>
                  </h4>
                  <p class="text-xl text-gray-500">$40.00</p>
                </div>
              </div>
              <div class="product-badge">New</div>
            </a>
          </div>
          <div class="product-card product-item">
            <a href="/single-product">
              <img src={item2} alt="Books" class="w-full h-auto" />
              <div class="product-detail">
                <div class="flex justify-between items-start mt-6">
                  <h4 class="product-title">
                    <a href="single-product.html">Seven Zero Five</a>
                  </h4>
                  <p class="text-xl text-gray-500">$40.00</p>
                </div>
              </div>
              <div class="product-badge">New</div>
            </a>
          </div>
        </div>
        <div class="text-center mt-12">
          <button type="submit" class="btn-dark">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;

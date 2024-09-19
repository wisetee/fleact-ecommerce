import { useState } from "react";
import { Icon } from "@iconify/react";
import PageHeader from "../PageHeader";
import item1 from "../../assets/images/item1.jpg";
import Filters from "../Filters";
import Pagination from "../Pagination";

function Shop() {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <>
      <PageHeader pageTitle={"Shop"} />
      <section id="shop">
        <div className="container mx-auto py-5 my-5">
          <div className="flex relative">

            <div
              className={`fixed w-full h-full top-0 left-0 z-50 md:z-0 md:static bg-white filters-wrapper ${
                showFilters ? "show" : ""
              }`}
            >
              <Filters toggleFilters={toggleFilters} isOpen={showFilters} />
            </div>
            
            <main className="flex-1">
              <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <div className="text-gray-600">Showing 1–9 of 55 results</div>
                <div className="flex">
                  <button onClick={toggleFilters} className="filter mr-4">
                    <span>Filters</span>
                    <Icon
                      icon="mage:filter"
                      className="ml-2 mb-1 inline-block"
                    />
                  </button>
                  <div>
                    <select className="border-0 bg-transparent">
                      <option value="">Default sorting</option>
                      <option value="">Newest</option>
                      <option value="">Price (Low-High)</option>
                      <option value="">Price (High-Low)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8">
                {Array(9)
                  .fill(0)
                  .map((_, idx) => (
                    <div key={idx} class="product-card product-item">
                      <a href="/single-product">
                        <img
                          src={item1.replace(
                            "1",
                            idx <= 3
                              ? idx + 1
                              : Math.abs(3 - idx) > 4
                              ? 1
                              : Math.abs(3 - idx)
                          )}
                          alt="Books"
                          class="w-full h-auto"
                        />
                        <div class="product-detail">
                          <div class="md:flex md:justify-between md:items-start mt-6">
                            <h4 class="product-title">
                              <a href="single-product.html">Seven Zero Five</a>
                            </h4>
                            <p class="text-base md:text-xl text-gray-500">
                              $40.00
                            </p>
                          </div>
                        </div>
                        {idx % 4 === 0 && (
                          <div class="product-badge">
                            {idx % 8 === 0 ? "New" : "Sale"}
                          </div>
                        )}
                      </a>
                    </div>
                  ))}
              </div>

              <Pagination totalItems={20} itemsPerPage={9}/>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}

export default Shop;

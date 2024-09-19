import { Icon } from "@iconify/react";

const Filters = ({toggleFilters, isOpen}) => {
  return (
    <aside className="mt-5 md:mt-0 px-4">
      <button onClick={toggleFilters} className={`${isOpen ? "sticky top-5":"" } float-right px-3 md:hidden`}>
        <Icon icon='tabler:x' className="text-2xl"/>
      </button>
      <div className="md:pt-12">
        {/* Categories */}
        <div className="mb-8">
          <h4 className="widget-title mb-2">Categories</h4>
          <ul >
            {["All", "T-Shirt", "Hoodies", "Pants", "Sweaters"].map(
              (category, idx) => (
                <li key={idx}>
                  <a href="#" className="nav-link">
                    {category}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Tags */}
        <div className="mb-8">
          <h4 className="widget-title mb-2">Tags</h4>
          <ul>
            {["T-shirts", "Clothes", "Cotton", "Woolen"].map((tag, idx) => (
              <li key={idx}>
                <a href="#" className="nav-link">
                  {tag}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Brands */}
        <div className="mb-8">
          <h4 className="widget-title mb-2">Brands</h4>
          <ul>
            {["Adidas", "Puma", "Nike"].map((brand, idx) => (
              <li key={idx}>
                <a href="#" className="nav-link">
                  {brand}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Filter */}
        <div>
          <h4 className="widget-title mb-2">Filter By Price</h4>
          <ul>
            {[
              "Less than $10",
              "$10- $20",
              "$20- $30",
              "$30- $40",
              "$40- $50",
            ].map((price, idx) => (
              <li key={idx}>
                <a href="#" className="nav-link">
                  {price}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Filters;

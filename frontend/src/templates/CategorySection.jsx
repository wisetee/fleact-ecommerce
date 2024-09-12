import categoryImage from '../assets/images/category1.jpg'

const CategorySection = () => {
  return (
    <section id="category" className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative mx-3">
            <a href="single-post.html" className="block overflow-hidden">
              <img
                src={categoryImage}
                alt="img"
                className="category-image"
              />
            </a>
            <div className="absolute bottom-0 left-0 p-6">
              <h5 className="uppercase text-white leading-4">Printed T-Shirts</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;

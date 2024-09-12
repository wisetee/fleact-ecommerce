import bgImage from "../../assets/images/banner-img1.jpg";
import { Icon } from "@iconify/react";
import NewArrival from "../NewArrival";
import CategorySection from "../CategorySection";

function Home() {
  return (
    <>
      <section
        id="hero"
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container padding-large">
          <div className="grid md:grid-cols-6 justify-center">
            <div className="md:col-start-2 md:col-span-3 lg:col-start-2 lg:col-span-2 text-center bg-black p-5 mx-4">
              <h2 className="display-1 banner-text text-white uppercase mt-3">
                Street Wears
              </h2>
              <p className="text-white uppercase mb-4">
                High quality cool tshirts for street fashion
              </p>
              <a
                href="/shop"
                className="btn-wrap btn-outline-light text-white hover:bg-white hover:text-black transition-all inline-block"
              >
                Start Shopping
                <Icon icon="tabler:arrow-left" className="icon icon-arrow-io"/>
              </a>
            </div>
          </div>
        </div>
      </section>

      <NewArrival />
      <CategorySection />
    </>
  );
}

export default Home;

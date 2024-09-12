import backgroundImage from '../assets/images/background-img.jpg'

const Newletter = () => {
  return (
    <section 
        style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container py-28">
        <div className="grid md:grid-cols-6 md:gap-16">
          <div className="md:col-span-2 md:col-start-2 md:ml-4 mb-8 md:mb-0 px-3">
            <h2 className="text-3xl register-text">
              Get <span className="italic">20% OFF</span> on
              your first purchase
            </h2>
            <p className="mt-4">
              Sign up for our newsletter and never miss any offers.
            </p>
          </div>
          <div className="md:col-span-2 md:ml-4 px-3">
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-input w-full rounded-lg p-3 border border-gray-300"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email Address"
                />
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="btn-dark"
                >
                  Register it now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newletter;

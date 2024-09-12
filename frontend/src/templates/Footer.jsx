import { Icon } from "@iconify/react";
import Logo from '../assets/images/logo-dark.png'

const Footer = () => {
  return (
    <footer id="footer" className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between mt-8">
          {/* Logo and Social Links */}
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
            <div className="footer-menu">
              <img
                src={Logo}
                alt="logo"
                className="w-32"
              />
              <div className="social-links mt-6">
                <ul className="flex gap-4">
                  <li>
                    <a href="#">
                      <Icon
                        className="social-media-icon"
                        icon="ri:facebook-fill"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Icon
                        className="social-media-icon"
                        icon="ri:twitter-fill"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Icon
                        className="social-media-icon"
                        icon="ri:pinterest-fill"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Icon
                        className="social-media-icon"
                        icon="ri:instagram-fill"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Icon
                        className="social-media-icon"
                        icon="ri:youtube-fill"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 lg:w-1/6 mb-8 md:mb-0">
            <div className="footer-menu">
              <h6 className="text-white font-bold text-lg mb-4">Quick Links</h6>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Offer
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* About Links */}
          <div className="w-full md:w-1/4 lg:w-1/6 mb-8 md:mb-0">
            <div className="footer-menu">
              <h6 className="text-white font-bold text-lg mb-4">About</h6>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Our Packages
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Promotions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Refer a Friend
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Help Center */}
          <div className="w-full md:w-1/4 lg:w-1/6 mb-8 md:mb-0">
            <div className="footer-menu">
              <h6 className="text-white font-bold text-lg mb-4">Help Center</h6>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Payments
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Product Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Checkout
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Other Issues
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

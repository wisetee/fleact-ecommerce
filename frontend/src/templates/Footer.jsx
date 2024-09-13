import { Icon } from "@iconify/react";
import Logo from "../assets/images/logo-dark.png";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Logo and Social Links */}
          <div className="md:col-span-2">
            <div className="footer-menu">
              <img src={Logo} alt="logo" className="w-32" />
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
              <h6 className="text-white font-bold text-lg mb-6">Quick Links</h6>
              <ul className="menu-list">
                <li>
                  <a href="#" className="footer-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Offer
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* About Links */}
          <div className="w-full md:w-1/4 lg:w-1/6 mb-8 md:mb-0">
            <div className="footer-menu">
              <h6 className="text-white font-bold text-lg mb-6">About</h6>
              <ul className="menu-list">
                <li>
                  <a href="#" className="footer-link">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Our Packages
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Promotions
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Refer a Friend
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Help Center */}
          <div className="w-full md:w-1/4 lg:w-1/6 mb-8 md:mb-0">
            <div className="footer-menu">
              <h6 className="text-white font-bold text-lg mb-6">Help Center</h6>
              <ul className="menu-list">
                <li>
                  <a href="#" className="footer-link">
                    Payments
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Product Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Checkout
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Other Issues
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right-section pt-3">
        <hr className="border-0 border-t opacity-25 m-0" />
        <div className="container mx-auto py-6 px-3">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Left Section */}
            <div className="text-center md:text-left mb-3 md:mb-0">
              <p className="text-gray-500">
                © 2023 UNICLUB. All rights reserved.
              </p>
            </div>

            {/* Right Section */}
            <div className="text-center md:text-right">
              <p className="text-gray-500">
                Free HTML Template by{" "}
                <a
                  href="https://templatesjungle.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-bold text-gray-400"
                >
                  TemplatesJungle
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { Icon } from "@iconify/react";
import Search from "./Search";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };


  const initScrollNav = () => {
    const scroll = window.scrollY;

    if (scroll >= 200) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', initScrollNav);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', initScrollNav);
    };
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full py-6 z-50 ${scrollNav ? 'bg-white' : ''}`}>
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="main-logo">
            <a href="/">
              <img src={logo} alt="logo" className="h-auto max-w-full" />
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div>
            <button
              onClick={toggleSearch}
              className="lg:hidden text-gray-800 focus:outline-none mr-2"
              aria-controls="offcanvasSearch"
            >
              <Icon icon="tabler:search" width="22" height="22" />
            </button>

            <a
              href="/cart"
              onClick={toggleSearch}
              className="lg:hidden inline-block text-gray-800 focus:outline-none mr-2"
              aria-controls="offcanvasSearch"
            >
              <Icon icon="mdi:cart" width="22" height="22" />
            </a>

            <button
              className="lg:hidden text-gray-800 focus:outline-none"
              onClick={toggleMenu}
            >
              <Icon icon="tabler:menu-deep" width="24" height="24" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex flex-grow justify-between items-center">
            <ul className="font-bold uppercase flex md:gap-4 lg:pl-12">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/shop" className="nav-link">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a href="/sale" className="nav-link">
                  Sale
                </a>
              </li>
            </ul>

            {/* User Icons */}
            <ul className="flex items-center gap-4">
              <li>
                <a href="/account" className="">
                  <Icon icon="healthicons:person" width="24" height="24" />
                </a>
              </li>
              <li>
                <a href="/wishlist" className="">
                  <Icon icon="mdi:heart" width="24" height="24" />
                </a>
              </li>
              <li className="">
                <a href="/cart" className="relative">
                  <Icon icon="mdi:cart" className="inline-block" width="24" height="24" />
                  <span className="absolute badge bg-black -translate-x-2/4 -translate-y-2/4">
                    3
                  </span>
                </a>
              </li>
              <li>
                <a onClick={toggleSearch} className="">
                  <Icon icon="tabler:search" width="24" height="24" />
                </a>
                <Search />
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity ${
            menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMenu}
        ></div>
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={toggleMenu}>
              <Icon icon="tabler:x" width="24" height="24" />
            </button>
          </div>
          <ul className="flex flex-col p-4">
            <li className="py-2">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="py-2">
              <a href="/shop" className="nav-link">
                Shop
              </a>
            </li>
            <li className="py-2">
              <a href="/sale" className="nav-link">
                Sale
              </a>
            </li>
            <li className="py-2">
              <a href="/account" className="nav-link">
                Account
              </a>
            </li>
            <li className="py-2">
              <a href="/wishlist" className="nav-link">
                Wishlist
              </a>
            </li>
          </ul>
        </div>

        {/* Search Dialogue */}
        <div
          className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleSearch}
        ></div>

        <div
          id="offcanvasSearchs"
          className={`fixed right-0 top-0 w-80 z-50 bg-white h-full shadow-lg transform transition-transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          tabIndex="-1"
          aria-labelledby="Search"
        >
          <div className="flex justify-center p-4">
            <button
              type="button"
              className="ml-auto"
              onClick={toggleSearch}
              aria-label="Close"
            >
              <Icon icon="tabler:x" className="text-xl" />
            </button>
          </div>

          <div className="p-4">
            <h4 className="text-primary text-xl uppercase mb-3">Search</h4>
            <div className="search-bar border rounded-md border-gray-300 p-2">
              <form
                id="search-form"
                className="flex items-center"
                action=""
                method=""
              >
                <input
                  type="text"
                  className="flex-grow border-0 bg-transparent outline-none"
                  placeholder="Search Here"
                />
                <Icon icon="tabler:search" className="text-2xl ml-2" />
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

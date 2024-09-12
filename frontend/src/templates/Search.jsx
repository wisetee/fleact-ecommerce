import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Offcanvas */}
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
    </>
  );
};

export default Search;
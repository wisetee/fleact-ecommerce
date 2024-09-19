import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'w-64' : 'w-16'
        } bg-gray-800 text-white h-full transition-width duration-300 ease-in-out relative`}
      >
        <button
          className={`absolute -right-3 top-6 bg-gray-700 text-white rounded-full p-1 ${
            isOpen ? 'rotate-180' : ''
          }`}
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 12H5m7 7-7-7m0 0 7-7"
            />
          </svg>
        </button>

        <ul className="mt-12 space-y-4">
          <li
            className={`flex items-center justify-center hover:bg-gray-700 ${
              isOpen ? 'justify-start' : ''
            }`}
          >
            <span className={`p-4 ${isOpen ? '' : 'hidden'}`}>Dashboard</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h18M9 21V9m6 12V9"
              />
            </svg>
          </li>
          <li
            className={`flex items-center justify-center hover:bg-gray-700 ${
              isOpen ? 'justify-start' : ''
            }`}
          >
            <span className={`p-4 ${isOpen ? '' : 'hidden'}`}>Settings</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"
              />
            </svg>
          </li>
          {/* Add more items as needed */}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold">Main Content</h1>
        <p>This is where your main content will go.</p>
      </div>
    </div>
  );
};

export default Sidebar;

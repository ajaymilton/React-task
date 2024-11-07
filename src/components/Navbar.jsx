import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiSearch, FiBell, FiSettings } from 'react-icons/fi';

const Navbar = () => (
  <nav className="bg-white shadow-md p-4">
    <div className="container mx-auto flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">

        {/* <div className="bg-green-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">
          EP
        </div> */}

        
        <div className="text-blue-600 font-bold text-lg">
        <span className="text-green-600 font-bold text-lg">E</span>
          Paisa
          </div>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? 'text-green-600 font-semibold' : 'text-gray-700'
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? 'text-green-600 font-semibold' : 'text-gray-700'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? 'text-green-600 font-semibold' : 'text-gray-700'
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/expenses"
          className={({ isActive }) =>
            isActive ? 'text-green-600 font-semibold' : 'text-gray-700'
          }
        >
          Expenses
        </NavLink>
        <NavLink
          to="/goals"
          className={({ isActive }) =>
            isActive ? 'text-green-600 font-semibold' : 'text-gray-700'
          }
        >
          Goals
        </NavLink>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search here..."
            className="border rounded-full py-1 px-3 pl-8 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-600"
          />
          <FiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Icons */}
        <FiBell className="text-gray-700" />
        <FiSettings className="text-gray-700" />

        {/* User Avatar */}
        <div className="bg-green-600 rounded-full h-8 w-8 overflow-hidden">
          <img
            src="data:image/jpeg;base64,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"
            alt="User Avatar"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;

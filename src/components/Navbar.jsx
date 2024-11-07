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
            src="https://media.istockphoto.com/id/1142192548/vector/man-avatar-profile-male-face-silhouette-or-icon-isolated-on-white-background-vector.jpg?s=612x612&w=0&k=20&c=DUKuRxK9OINHXt3_4m-GxraeoDDlhNuCbA9hp6FotFE="
            alt="User Avatar"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;


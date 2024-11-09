import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiSearch, FiBell, FiSettings } from 'react-icons/fi';

const Navbar = () => (
  <nav className="bg-gray-100 p-4 rounded-full mx-6 fixed top-0 left-0 right-0 z-50">
    <div className="container mx-auto flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-start bg-white rounded-full pr-10 pl-2 py-1.5 space-x-2 shadow-sm">
        <div className="bg-green-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">
          EP
        </div>
        <div className="text-blue-600 font-bold text-lg flex items-center">
          <span className="text-green-600 font-bold">E</span>Paisa
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-10 px-4 pt-4 pb-1">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? 'text-green-600 font-semibold' : 'text-black'
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? 'text-green-600 font-semibold' : 'text-black'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? 'text-green-600 font-semibold' : 'text-black'
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/expenses"
          className={({ isActive }) =>
            isActive ? 'text-green-600 font-semibold' : 'text-black'
          }
        >
          Expenses
        </NavLink>
        <NavLink
          to="/goals"
          className='bg-green-500 text-white font-semibold rounded-full px-2 py-1'
        >
          Goals
        </NavLink>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative bg-white rounded-full pl-2 py-1.5 shadow-sm">
          <input
            type="text"
            placeholder="Search here..."
            className="bg-white rounded-full py-1.5 pl-6 text-sm text-gray-700 placeholder-gray-500 focus:outline-none"
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Icons with White Background */}
        
        <div className="flex space-x-2 bg-white rounded-full px-2 py-1.5">
        <div className="bg-gray-200 p-2 rounded-full shadow-sm">
          <FiBell className="text-gray-700" />
        </div>
        <div className='bg-white p-2 rounded-full'>
          <FiSettings className="text-gray-700" />
          </div>
        </div>

        {/* User Avatar */}
        <div className="bg-green-500 rounded-full h-11 w-11 overflow-hidden shadow-sm">
          <img
            src="https://media.istockphoto.com/id/1465504312/vector/young-smiling-man-avatar-man-with-brown-beard-mustache-and-hair-wearing-yellow-sweater-or.jpg?s=612x612&w=0&k=20&c=9AyNmOwjadmLC1PKpANKEXj56e1KxHj9h9hGknd-Rb0="
            alt="User Avatar"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Expenses from './pages/Expenses';
import Goals from './pages/Goals';
import ProductsCarousel from './pages/ProductsCarousel';


const App = () => (
  <div className="min-h-screen bg-gray-100">
  <Navbar />
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/home" element={<Home />} />
    <Route path="/products" element={<ProductsCarousel />} />
    <Route path="/expenses" element={<Expenses />} />
    <Route path="/goals" element={<Goals />} />
  </Routes>
</div>
);

export default App;



import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaRegStar,
  FaShoppingCart,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import DailyBestSells from "./products/DailyBestSells";
import FeaturedProducts from "./products/FeaturedProducts";

const products = [
  {
    name: "Radish 500g",
    price: 2,
    oldPrice: 3.99,
    type: "Vegetables",
    image:
      "https://media.istockphoto.com/id/158690297/photo/daikon-radishes-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=k_KVuE_UbE-shIiG2z2xY8Fu7BqKy_bk4D9NfZdrTfM=",
  },
  {
    name: "Potatoes 1kg",
    price: 1,
    oldPrice: 1.99,
    type: "Vegetables",
    image:
      "https://media.istockphoto.com/id/157430678/photo/three-potatoes.jpg?s=612x612&w=0&k=20&c=qkMoEgcj8ZvYbzDYEJEhbQ57v-nmkHS7e88q8dv7TSA=",
  },
  {
    name: "Tomatoes 200g",
    price: 2,
    oldPrice: 3.99,
    type: "Fruits",
    image:
      "https://media.istockphoto.com/id/831570242/photo/three-juicy-red-tomatoes-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=bBrjZsWY4eg90OpA2S6cO3psGR1TFx8f4L0HAmIQqm4=",
  },
  {
    name: "Broccoli 1kg",
    price: 1,
    oldPrice: 1.99,
    type: "Vegetables",
    image:
      "https://media.istockphoto.com/id/1364035705/photo/fresh-broccoli-on-white-background.jpg?s=612x612&w=0&k=20&c=fEcEq65rKBmT8PltpAyg_-na0WomTJ6S6m04uXQQtJs=",
  },
  {
    name: "Green Beans 250g",
    price: 3,
    oldPrice: 2.99,
    type: "Vegetables",
    image:
      "https://media.istockphoto.com/id/133888216/photo/close-up-of-green-beans-on-a-white-background.jpg?s=612x612&w=0&k=20&c=qWGf3BG8TqHzbXaCWeEvew7-S1qWR4ktLJZX2mQI07I=",
  },
  {
    name: "Radish 500g",
    price: 2,
    oldPrice: 3.99,
    type: "Vegetables",
    image:
      "https://media.istockphoto.com/id/158690297/photo/daikon-radishes-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=k_KVuE_UbE-shIiG2z2xY8Fu7BqKy_bk4D9NfZdrTfM=",
  },
  {
    name: "Potatoes 1kg",
    price: 1,
    oldPrice: 1.99,
    type: "Vegetables",
    image:
      "https://media.istockphoto.com/id/157430678/photo/three-potatoes.jpg?s=612x612&w=0&k=20&c=qkMoEgcj8ZvYbzDYEJEhbQ57v-nmkHS7e88q8dv7TSA=",
  },
  {
    name: "Tomatoes 200g",
    price: 1,
    oldPrice: 1.99,
    type: "Fruits",
    image:
      "https://media.istockphoto.com/id/831570242/photo/three-juicy-red-tomatoes-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=bBrjZsWY4eg90OpA2S6cO3psGR1TFx8f4L0HAmIQqm4=",
  },
  {
    name: "Broccoli 1kg",
    price: 1,
    oldPrice: 1.99,
    type: "Vegetables",
    image:
      "https://media.istockphoto.com/id/1364035705/photo/fresh-broccoli-on-white-background.jpg?s=612x612&w=0&k=20&c=fEcEq65rKBmT8PltpAyg_-na0WomTJ6S6m04uXQQtJs=",
  },
  {
    name: "Green Beans 250g",
    price: 1,
    oldPrice: 1.99,
    type: "Vegetables",
    image:
      "https://media.istockphoto.com/id/133888216/photo/close-up-of-green-beans-on-a-white-background.jpg?s=612x612&w=0&k=20&c=qWGf3BG8TqHzbXaCWeEvew7-S1qWR4ktLJZX2mQI07I=",
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col items-center bg-white p-4 shadow-lg w-60">
      <img
        src={product.image}
        alt={product.name}
        className="h-32 w-full object-cover rounded-t-lg"
      />
      <div className="text-left w-full">
        <p className="text-sm text-gray-500">{product.type}</p>
        <h3 className="text-gray-800 font-semibold text-lg mt-1">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-start text-yellow-500 mt-1">
          <FaStar size={14} />
          <FaStar size={14} />
          <FaStar size={14} />
          <FaStar size={14} />
          <FaRegStar size={14} />
          <span className="text-gray-500 text-xs ml-1">(4)</span>
        </div>

        <p className="text-xs text-gray-500 mt-1 mb-4">
          By <span className="text-orange-500">Mr.food</span>
        </p>

        {/* Pricing */}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xl font-semibold text-orange-500">
              ${product.price}
            </span>
            <span className="line-through text-gray-500 text-sm ml-2">
              ${product.oldPrice}
            </span>
          </div>
          <button className="bg-orange-500 text-white px-4 py-1 mt-2 hover:bg-orange-600 flex items-center justify-center">
            <FaShoppingCart className="text-sm mr-2" />
            <span className="text-sm font-semibold">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductsCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 4;

  const handleNext = () => {
    setStartIndex(
      (prevIndex) => (prevIndex + 1) % (products.length - cardsPerPage + 1)
    );
  };

  const handlePrev = () => {
    setStartIndex(
      (prevIndex) =>
        (prevIndex - 1 + (products.length - cardsPerPage + 1)) %
        (products.length - cardsPerPage + 1)
    );
  };

  const displayedProducts = products.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (
    <div className="bg-gradient-to-b from-green-950 to-green-800 py-8 px-8 lg:px-10 max-w-screen-lg mx-auto">
      <div className="relative flex items-center justify-center py-8 px-8 lg:px-10 max-w-screen-lg mx-auto">
        <button
          onClick={handlePrev}
          className="absolute left-0 text-orange-500 p-2"
        >
          <FaChevronLeft size={24} />
        </button>

        <div className="flex overflow-hidden w-full space-x-6">
          {displayedProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 text-orange-500 p-2"
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      <div className="flex space-x-4 py-8 max-w-screen-lg mx-auto">
        {/* Left Banner */}
        <div className="flex items-center bg-gradient-to-b from-green-900 to-black text-white p-8 w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-green-800 opacity-20"></div>
          <div className="relative z-10">
            <p className="text-sm font-semibold bg-green-700 px-2 py-1 inline-block rounded mb-4">
              Free delivery
            </p>
            <h2 className="text-2xl font-bold mb-2">Free delivery - $50</h2>
            <p className="mb-4">Shop $50 and get free delivery.</p>
            <button className="bg-green-700 px-4 py-2 rounded text-white hover:bg-green-600">
              Shop Now
            </button>
          </div>
          <img
            src="https://media.istockphoto.com/id/1296986175/photo/young-man-working-for-a-food-delivery-service-checking-with-road-motorcycle-in-the-city.jpg?s=612x612&w=0&k=20&c=TXsIHrSIyFlkHSpJq_AhX3V0l9X_U79e9cfpdMNH5LQ="
            alt="Delivery Person"
            className="w-40 h-40 object-cover absolute right-8 bottom-8 z-0 opacity-90"
          />
        </div>

        {/* Right Banner */}
        <div className="flex items-center bg-gradient-to-b from-red-800 to-black text-white p-8 w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-red-800 opacity-20"></div>
          <div className="relative z-10">
            <p className="text-sm font-semibold bg-red-700 px-2 py-1 inline-block rounded mb-4">
              60% off
            </p>
            <h2 className="text-2xl font-bold mb-2">Organic Food</h2>
            <p className="mb-4">Save 60% off on your first order.</p>
            <button className="bg-red-700 px-4 py-2 rounded text-white hover:bg-red-600">
              Order Now
            </button>
          </div>
          <img
            src="https://media.istockphoto.com/id/1128687123/photo/shopping-bag-full-of-fresh-vegetables-and-fruits.jpg?s=612x612&w=0&k=20&c=jXInOVcduhEnfuUVffbUacldkF5CwAeThD3MDUXCItM="
            alt="Organic Food"
            className="w-40 h-40 object-cover absolute right-8 bottom-8 z-0 opacity-90"
          />
        </div>
      </div>

      <DailyBestSells />
      <FeaturedProducts />
    </div>
  );
};

export default ProductsCarousel;

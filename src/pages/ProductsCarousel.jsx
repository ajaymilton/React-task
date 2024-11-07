import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
    price: 0.3,
    oldPrice: 0.99,
    type: "Fruits",
    image:
      "https://media.istockphoto.com/id/831570242/photo/three-juicy-red-tomatoes-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=bBrjZsWY4eg90OpA2S6cO3psGR1TFx8f4L0HAmIQqm4=",
  },
  {
    name: "Broccoli 1kg",
    price: 1.5,
    oldPrice: 2.99,
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
      "https://media.istockphoto.com/id/182035936/photo/fresh-beans.jpg?s=612x612&w=0&k=20&c=BCPwV719N6jAAiEQgucyVUdNIsDvECS4-sOy0Dbsrbw=",
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
    price: 0.3,
    oldPrice: 0.99,
    type: "Fruits",
    image:
      "https://media.istockphoto.com/id/831570242/photo/three-juicy-red-tomatoes-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=bBrjZsWY4eg90OpA2S6cO3psGR1TFx8f4L0HAmIQqm4=",
  },
  {
    name: "Broccoli 1kg",
    price: 1.5,
    oldPrice: 2.99,
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
      "https://media.istockphoto.com/id/182035936/photo/fresh-beans.jpg?s=612x612&w=0&k=20&c=BCPwV719N6jAAiEQgucyVUdNIsDvECS4-sOy0Dbsrbw=",
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col items-center bg-white p-4 shadow-md w-48 h-70">
      <img
        src={product.image}
        alt={product.name}
        className="h-32 w-full object-cover mb-2"
      />
      <div className="text-center">
        <h3 className="text-gray-700 font-bold">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.type}</p>
        <p className="text-yellow-500">By MrFood</p>
        <div className="flex justify-center items-center my-2">
          <span className="text-xl font-semibold text-green-600">
            ${product.price}
          </span>
          <span className="line-through text-gray-500 ml-2">
            ${product.oldPrice}
          </span>
        </div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
          Add
        </button>
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
        <div className="flex items-center bg-green-900 text-white p-8 w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-green-800 opacity-20"></div>
          <div className="relative z-10">
            <p className="text-sm font-semibold bg-green-700 px-2 py-1 inline-block rounded mb-4">
              Free delivery
            </p>
            <h2 className="text-2xl font-bold mb-2">Free delivery over $50</h2>
            <p className="mb-4">Shop $50 product and get free delivery.</p>
            <button className="bg-green-700 px-4 py-2 rounded text-white hover:bg-green-600">
              Shop Now
            </button>
          </div>
          <img
            src="https://media.istockphoto.com/id/1296986175/photo/young-man-working-for-a-food-delivery-service-checking-with-road-motorcycle-in-the-city.jpg?s=612x612&w=0&k=20&c=TXsIHrSIyFlkHSpJq_AhX3V0l9X_U79e9cfpdMNH5LQ="
            alt="Delivery Person"
            className="w-40 h-40 object-cover absolute right-4 bottom-4 z-0"
          />
        </div>

        {/* Right Banner */}
        <div className="flex items-center bg-red-900 text-white p-8 w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-red-800 opacity-20"></div>
          <div className="relative z-10">
            <p className="text-sm font-semibold bg-red-700 px-2 py-1 inline-block rounded mb-4">
              60% off
            </p>
            <h2 className="text-2xl font-bold mb-2">Organic Food</h2>
            <p className="mb-4">Save up to 60% off on your first order.</p>
            <button className="bg-red-700 px-4 py-2 rounded text-white hover:bg-red-600">
              Order Now
            </button>
          </div>
          <img
            src="https://media.istockphoto.com/id/1128687123/photo/shopping-bag-full-of-fresh-vegetables-and-fruits.jpg?s=612x612&w=0&k=20&c=jXInOVcduhEnfuUVffbUacldkF5CwAeThD3MDUXCItM="
            alt="Organic Food"
            className="w-40 h-40 object-cover absolute right-4 bottom-4 z-0"
          />
        </div>
      </div>

      <DailyBestSells />
      <FeaturedProducts />
    </div>
  );
};

export default ProductsCarousel;

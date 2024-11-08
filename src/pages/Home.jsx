import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaShoppingCart,
  FaStar,
  FaRegStar,
} from "react-icons/fa";

const initialProducts = [
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
    name: "Beans 250g",
    price: 3,
    oldPrice: 2.99,
    type: "Vegetables",
    image:
      "https://media.istockphoto.com/id/133888216/photo/close-up-of-green-beans-on-a-white-background.jpg?s=612x612&w=0&k=20&c=qWGf3BG8TqHzbXaCWeEvew7-S1qWR4ktLJZX2mQI07I=",
  },
];


const products = Array.from({ length: 50 }, (_, index) => ({
  ...initialProducts[index % initialProducts.length],
  id: index + 1,
}));

const ProductsCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 8;

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  const displayedProducts = [
    ...products.slice(startIndex, startIndex + cardsPerPage),
    ...products.slice(
      0,
      Math.max(0, startIndex + cardsPerPage - products.length)
    ),
  ].slice(0, cardsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-950 to-green-800">
      <div className="mx-8 py-8">
        <h2 className="text-2xl mx-8 font-bold text-white mb-6">Products</h2>

        <div className="flex overflow-hidden mx-8 space-x-4">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center bg-white p-4 shadow-lg w-60"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-32 w-full object-cover"
              />

              <div className="text-left w-full">
                <p className="text-sm text-gray-500">{product.type}</p>
                <h3 className="text-gray-800 font-semibold text-lg mt-1">
                  {product.name}
                </h3>

                <div className="flex items-center text-yellow-500 mt-1">
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

                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xl font-semibold text-orange-500">
                      ${product.price}
                    </span>
                    <span className="line-through text-gray-500 text-sm ml-2">
                      ${product.oldPrice}
                    </span>
                  </div>
                  <button className="bg-orange-500 text-white px-4 py-1 hover:bg-orange-600 flex items-center">
                    <FaShoppingCart className="text-sm mr-2" />
                    <span className="text-sm font-semibold">Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={handlePrev}
            className="text-white bg-orange-500 p-2 rounded-full hover:bg-orange-600"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="text-white bg-orange-500 p-2 rounded-full hover:bg-orange-600"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCarousel;

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaShoppingCart } from "react-icons/fa";

const products = [
  {
    label: "Save 10%",
    name: "Coffee 1kg",
    category: "Coffee & Teas",
    price: "$20",
    oldPrice: "$25",
    sold: 20,
    total: 50,
    rating: 4,
    image:
      "https://media.istockphoto.com/id/1282131250/photo/brown-kraft-paper-pouch-bags-with-coffee-beans-top-view-with-shadow-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=JZIk1gAmp6OnsRadwNUcHerJw4yL2YUYLGqKGhQIwpU=",
  },
  {
    label: "Best deal",
    name: "Sausage 350g",
    category: "Meat",
    price: "$4",
    oldPrice: "$10",
    sold: 7,
    total: 20,
    rating: 4,
    image:
      "https://media.istockphoto.com/id/1847114546/photo/collection-of-raw-sausages-to-be-grilled-grilled-sausages-on-a-food-stand.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y4J0tse5LFWu2kES2N3C4IMa7Z9UbG7k2jFVIHXczA0=",
  },
  {
    label: "Save 4%",
    name: "Green Tea 250g",
    category: "Coffee & Teas",
    price: "$3",
    oldPrice: "$7",
    sold: 32,
    total: 50,
    rating: 4,
    image:
      "https://media.istockphoto.com/id/1160359568/photo/lipton-weight-loss-japanese-pyramid-lemon-organic-used-kirkland-tropical-acai-pure.webp?a=1&b=1&s=612x612&w=0&k=20&c=WXk0hC0y-U-jNyfiVfwhwvDEaZ44ZqMqaKZ6hBGdii8=",
  },
  {
    label: "Save 8%",
    name: "Onion 1kg",
    category: "Vegetables",
    price: "$0.50",
    oldPrice: "$2",
    sold: 2,
    total: 10,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1600807644626-fb3c8c8ba40d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE9uaW9uJTIwMWtnfGVufDB8fDB8fHww",
  },

  {
    label: "Save 10%",
    name: "Coffee 1kg",
    category: "Coffee & Teas",
    price: "$20",
    oldPrice: "$25",
    sold: 20,
    total: 50,
    rating: 4,
    image:
      "https://media.istockphoto.com/id/1282131250/photo/brown-kraft-paper-pouch-bags-with-coffee-beans-top-view-with-shadow-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=JZIk1gAmp6OnsRadwNUcHerJw4yL2YUYLGqKGhQIwpU=",
  },
  {
    label: "Best deal",
    name: "Sausage 350g",
    category: "Meat",
    price: "$4",
    oldPrice: "$10",
    sold: 7,
    total: 20,
    rating: 4,
    image:
      "https://media.istockphoto.com/id/1847114546/photo/collection-of-raw-sausages-to-be-grilled-grilled-sausages-on-a-food-stand.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y4J0tse5LFWu2kES2N3C4IMa7Z9UbG7k2jFVIHXczA0=",
  },
  {
    label: "Save 4%",
    name: "Green Tea 250g",
    category: "Coffee & Teas",
    price: "$3",
    oldPrice: "$7",
    sold: 32,
    total: 50,
    rating: 4,
    image:
      "https://media.istockphoto.com/id/1160359568/photo/lipton-weight-loss-japanese-pyramid-lemon-organic-used-kirkland-tropical-acai-pure.webp?a=1&b=1&s=612x612&w=0&k=20&c=WXk0hC0y-U-jNyfiVfwhwvDEaZ44ZqMqaKZ6hBGdii8=",
  },
  {
    label: "Save 8%",
    name: "Onion 1kg",
    category: "Vegetables",
    price: "$0.50",
    oldPrice: "$2",
    sold: 2,
    total: 10,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1600807644626-fb3c8c8ba40d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE9uaW9uJTIwMWtnfGVufDB8fDB8fHww",
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 shadow-md w-60 relative">
      {/* Discount Label */}
      {product.label && (
        <div className="absolute top-0 left-0 text-xs font-semibold bg-orange-500 text-white px-2 py-1">
          {product.label}
        </div>
      )}

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="h-32 w-full object-cover top-4 mb-4 "
      />

      {/* Product Info */}
      <div className="text-left">
        <p className="text-sm text-gray-500 mb-1">{product.category}</p>
        <h3 className="text-gray-700 font-bold mb-1">{product.name}</h3>

        <div className="text-yellow-500 my-2">⭐⭐⭐⭐ ({product.rating})</div>

        {/* Price */}
        <div className="flex items-start my-2">
          <span className="text-lg font-semibold text-orange-500">
            ${product.price}
          </span>
          {product.oldPrice && (
            <span className="line-through text-gray-500 ml-2">
              ${product.oldPrice}
            </span>
          )}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-1 mb-2">
          <div
            className="bg-orange-500 h-1 rounded-full"
            style={{
              width: `${(product.sold / product.total) * 100}%`,
            }}
          ></div>
        </div>

        {/* Sold Information */}
        <p className="text-xs text-gray-500 mb-2">
          Sold: {product.sold}/{product.total}
        </p>

        {/* Add to Cart Button */}
        <button className="bg-orange-500 text-white px-4 py-2 flex items-center justify-center w-full hover:bg-orange-600 mt-2">
          <FaShoppingCart className="text-sm mr-2" />
          <span className="text-sm font-semibold">Add to cart</span>
        </button>
      </div>
    </div>
  );
};

const DailyBestSells = () => {
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
    <div className="max-w-screen-lg mx-auto py-8">
      <div className="flex items-center justify-between mb-6 bg-green-900 p-4 rounded">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold text-white">Daily Best Sells</h2>
          <nav className="flex space-x-4 text-gray-400">
            <span className="cursor-pointer text-white font-semibold">
              Featured
            </span>
            <span className="cursor-pointer text-orange-500 font-semibold">
              Popular
            </span>
            <span className="cursor-pointer text-orange-500 font-semibold">
              New
            </span>
          </nav>
        </div>
        <div className="flex items-center space-x-6">
          <div className="bg-orange-500 text-white px-3 py-1 font-bold">
            Expires in: 10:56:21
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handlePrev}
              className="text-white bg-orange-500 p-2 rounded-full hover:bg-orange-600"
            >
              <FaChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="text-white bg-orange-500 p-2 rounded-full hover:bg-orange-600"
            >
              <FaChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        {/* Product Carousel */}
        <div className="flex overflow-hidden space-x-4 w-4/5">
          {displayedProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* Right Signup Card */}
        <div className="bg-orange-500 text-white p-6 w-1/5 flex flex-col items-center">
          <h3 className="text-xl font-bold mb-2">10% OFF</h3>
          <p className="text-sm mb-4">
            For new members signing up at the first time
          </p>
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-2 mb-2 text-gray-800 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 text-gray-800 rounded"
          />
          <button className="bg-white text-orange-500 font-semibold py-2 px-4 rounded w-full hover:bg-gray-200">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyBestSells;

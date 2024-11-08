import React from "react";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Orange 1kg",
      price: "$2",
      oldPrice: "$3.99",
      image:
        "https://media.istockphoto.com/id/899238622/photo/tangerine-fruits.jpg?s=612x612&w=0&k=20&c=EgWNtzfj_qKLec6SaBLW8PSxy6pjM-ask2T46MrsTb0=",
      rating: 4,
    },
    {
      id: 2,
      name: "Green Veg 1kg",
      price: "$2",
      oldPrice: "$3.99",
      image:
        "https://media.istockphoto.com/id/899780180/photo/mix-salad-leaves-in-a-black-bowl.jpg?s=612x612&w=0&k=20&c=Q9AT6bm2z-i74tkr_syYNzQKVtwUvTVjNSPeDf25PUc=",
      rating: 4,
    },
    {
      id: 3,
      name: "Apple 1kg",
      price: "$2",
      oldPrice: "$3.99",
      image:
        "https://media.istockphoto.com/id/614871876/photo/apple-isolated-on-wood-background.jpg?s=612x612&w=0&k=20&c=_8ShFA2p-xbTBMz0g7JUSsfd329GBkyj47dzW3F1mqc=",
      rating: 4,
    },
  ];

  const categories = [
    { title: "Top Sells", items: products },
    { title: "Top Rated", items: products },
    { title: "Trending Items", items: products },
    { title: "Recently Added", items: products },
  ];

  return (
    <div className="bg-green-900 py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="text-white">
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-yellow-500 inline-block pb-1">
              {category.title}
            </h3>
            <ul>
              {category.items.map((product) => (
                <li key={product.id} className="mb-6 flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 mr-4 object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold">{product.name}</p>
                    <div className="flex items-center text-yellow-400 text-xs mb-1">
                      {"★".repeat(product.rating)}{" "}
                      <span className="text-white ml-1">
                        ({product.rating})
                      </span>
                    </div>
                    <p className="text-lg font-bold text-orange-500">
                      {product.price}
                    </p>
                    <p className="text-sm line-through text-gray-400">
                      {product.oldPrice}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

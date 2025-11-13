import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const LatestProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/latest-products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center">Recent <span className="text-primary">Products</span></h1>
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-col lg:grid-cols-3 items-center gap-5">
      {products.map(product => (
        <div
              key={product._id}
              className="border rounded-xl p-4 shadow hover:shadow-lg transition"
        >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">
                {product.title}
              </h2>
              <p className="text-gray-700">
                Price: ${product.price_min} - ${product.price_max}
              </p>
              <p className="text-gray-700">Country:{product.Origin_Country}</p>
              <p className="text-gray-700">Origin Country:{product.Origin_Country}</p>
              <p className="text-gray-700">Rating:{product.Origin_Country}</p>
              <p className="text-gray-700">Available Quantity:{product.Origin_Country}</p>
                <Link to={`/products-details/${product._id}`} className="btn btn-outline btn-primary px-6 w-full">View Details </Link>
            </div>
          ))}
      </div>
     <div className="flex justify-center mb-10">
        <Link to={'/allProducts'} className="btn btn-outline btn-primary px-6">See All Products</Link>
      </div>
    </div>
  );
};

export default LatestProducts;

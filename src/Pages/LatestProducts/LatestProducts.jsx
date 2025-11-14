import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const LatestProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://smart-deals-app.vercel.app/latest-products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">
        Recent <span className="text-primary">Products</span>
      </h1>

      <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={product.product_image}
              alt={product.product_name}
              className="w-full h-48 object-cover rounded-md mb-4"
              onError={(e) => {
                e.target.src = "https://i.ibb.co/6Nf3ySm/default-user.png";
              }}
            />

            <h2 className="text-lg font-semibold text-primary mb-2">
              {product.product_name}
            </h2>

            <p className="text-gray-700">Price: ${product.price}</p>
            <p className="text-gray-700">Origin: {product.origin_country}</p>
            <p className="text-gray-700">Rating: {product.rating} stars</p>
            <p className="text-gray-700">
              Stock: {product.available_quantity > 0 ? product.available_quantity : "Out of stock"}
            </p>

            <Link
              to={"products-details/:id"}
              className="btn btn-outline btn-primary w-full mt-3"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center mb-10">
        <Link to="/allProducts" className="btn btn-outline btn-primary px-6">
          See All Products
        </Link>
      </div>
    </div>
  );
};

export default LatestProducts;

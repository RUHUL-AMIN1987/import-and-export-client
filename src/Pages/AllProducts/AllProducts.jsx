import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg">
        Loading products...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-8 text-center text-primary">
        All Products
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="border rounded-xl p-4 shadow hover:shadow-lg transition duration-300 bg-white"
            >
              <img
                src={product.product_image}
                alt={product.product_name}
                className="w-full h-48 object-cover rounded-md mb-4"
                onError={(e) => {
                  e.target.src =
                    "https://i.ibb.co/6Nf3ySm/default-user.png";
                }}
              />
              <h2 className="text-lg font-semibold mb-2 line-clamp-1">
                {product.product_name}
              </h2>
              <p className="text-gray-700 font-medium">
                Price: ${product.price}
              </p>
              <p className="text-gray-700">
                Origin: {product.origin_country || "N/A"}
              </p>
              <p className="text-gray-700">
                Rating: {product.rating || "N/A"}
              </p>
              <p
                className={`text-sm font-medium mt-1 ${
                  product.available_quantity > 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {product.available_quantity > 0
                  ? `${product.available_quantity} in stock`
                  : "Out of stock"}
              </p>
              <Link
                to={"/products-details"}
                className="btn btn-outline btn-primary w-full mt-3"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;

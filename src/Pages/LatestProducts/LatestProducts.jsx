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
    <div className="container mx-auto mt-10 text-center">
        <h1 className="text-3xl font-bold">Recent <span className="text-primary">Products</span></h1>
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-col lg:grid-cols-3 items-center gap-12">
      {products.map(product => (
        <div key={product._id} className="p-4 shadow rounded-lg bg-base-100">
            <img className="w-full h-96" src={product.image} alt="" />
          <h3 className="font-semibold py-4">{product.title}</h3>
          <div className="flex justify-between mb-5">
            <p className="text-sm text-gray-600">Min-Price: ${product.price_min}</p>
            <p className="text-sm text-gray-600">Max-Price: ${product.price_max}</p>
          </div>
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

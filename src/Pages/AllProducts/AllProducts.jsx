import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Error loading products:", err));
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">All Products</h1>

            {products.length === 0 ? (
                <p className="text-center text-gray-500">Loading products...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
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
                            <p>Country:{product.Origin_Country}</p>
                            <Link to={`/products-details/${product._id}`} className="btn btn-outline btn-primary px-6 w-full">View Details </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllProducts;

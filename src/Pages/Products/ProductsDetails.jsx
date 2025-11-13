import React, { useContext, useEffect, useRef, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';

const ProductsDetails = () => {
    const product = useLoaderData();
    const { _id } = product;
    const moralRefUse = useRef(null);
    const { user } = useContext(AuthContext);
    const [bids, setBids] = useState([]);

    // Fetch bids for this product
    useEffect(() => {
        fetch(`http://localhost:3000/products/bids/${_id}`)
            .then(res => res.json())
            .then(data => setBids(data))
            .catch(err => console.error('Error fetching bids:', err));
    }, [_id]);

    const handleMoralUse = () => {
        moralRefUse.current?.showModal();
    };

    const handleBidSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const bit = form.bit.value;

        if (!bit || isNaN(bit) || Number(bit) <= 0) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Bid',
                text: 'Please enter a valid bid amount.',
            });
            return;
        }

        const newBid = {
            product: _id,
            buyer_name: name,
            buyer_email: email,
            bid_price: Number(bit),
            status: "pending",
        };

        fetch("http://localhost:3000/bids", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBid)
        })
        .then(res => res.json())
        .then(data => {
            console.log("Bid saved:", data);
            
            // Close modal
            moralRefUse.current?.close();
            form.reset();

            // Success alert
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your bid has been placed!",
                showConfirmButton: false,
                timer: 1500
            });

            // Refresh bids
            setBids(prev => [...prev, { ...newBid, _id: data.insertedId }]);
        })
        .catch(err => {
            console.error("Error saving bid:", err);
            Swal.fire({
                icon: 'error',
                title: 'Failed',
                text: 'Could not place bid. Please try again.',
            });
        });
    };

    return (
        <div className="container mx-auto p-4">
            {/* Product Info */}
            <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                <h1 className="text-2xl font-bold">{product.title}</h1>
                <p className="text-gray-600">{product.product_image}</p>
                <p className="text-lg font-semibold mt-2">Price: ${product.price}</p>
            </div>

            {/* Bid Button */}
            <div className="text-center mb-8">
                <button onClick={handleMoralUse} className="gradient-btn px-6 py-3 text-white font-medium rounded-lg">
                    I want to import this product
                </button>
            </div>

            {/* Bid Modal */}
            <dialog ref={moralRefUse} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-2">Give Seller Your Offered Price!</h3>
                    <p className="text-sm text-gray-500 mb-4">Press ESC or click outside to close</p>

                    <form onSubmit={handleBidSubmit} className="space-y-4">
                        <fieldset className="space-y-3">
                            <div>
                                <label className="label font-medium">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="input input-bordered w-full"
                                    readOnly
                                    defaultValue={user?.displayName || ''}
                                />
                            </div>

                            <div>
                                <label className="label font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="input input-bordered w-full"
                                    readOnly
                                    defaultValue={user?.email || ''}
                                />
                            </div>

                            <div>
                                <label className="label font-medium">Bid Amount ($)</label>
                                <input
                                    type="number"
                                    name="bit"
                                    className="input input-bordered w-full"
                                    placeholder="e.g. 1500"
                                    min="1"
                                    step="1"
                                    required
                                />
                            </div>

                            <div className="flex gap-3 justify-end mt-6">
                                <button
                                    type="button"
                                    className="btn btn-ghost"
                                    onClick={() => moralRefUse.current?.close()}
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Place Bid
                                </button>
                            </div>
                        </fieldset>
                    </form>
                </div>

                {/* Backdrop close */}
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

            {/* Bids Section */}
            <div className="mt-12">
                <h2 className="text-xl font-bold mb-4">
                    Bids for This Product ({bids.length})
                </h2>

                {bids.length === 0 ? (
                    <p className="text-gray-500">No bids yet. Be the first!</p>
                ) : (
                    <div className="grid gap-3">
                        {bids.map((bid) => (
                            <div key={bid._id} className="bg-gray-50 p-4 rounded-lg border">
                                <p><strong>{bid.buyer_name}</strong> offered <strong>৳{bid.bid_price}</strong></p>
                                <p className="text-sm text-gray-600">{bid.buyer_email}</p>
                                <span className={`badge ${bid.status === 'pending' ? 'badge-warning' : 'badge-success'} mt-2`}>
                                    {bid.status}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductsDetails;
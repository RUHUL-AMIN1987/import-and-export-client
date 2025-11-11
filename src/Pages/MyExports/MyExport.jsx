import React from 'react';

const MyExport = () => {
    return (
        <div>
            <h3>My Bids: </h3>
            <div className="overflow-x-auto">
                <table className="table">
                {/* head */}
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Seller</th>
                    <th>Bid Price</th>
                    <th>Status</th>
                    <th>Actions</th>
                    </tr>
                </thead>
               
                </table>
            </div>
        </div>
    );
};

export default MyExport;
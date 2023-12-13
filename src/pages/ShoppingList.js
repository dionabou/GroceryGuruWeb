import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import "../styles/ShoppingList.css"

function ShoppingList() {
  const { tripId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const [trip, setTrip] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:8080/api/trips/${tripId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          console.error('Failed to fetch trip. Status:', response.status);
          setError('Failed to fetch trip. Please try again later.');
          return;
        }

        const data = await response.json();
        console.log(data)
        setTrip(data);


      } catch (error) {
        console.error('Error fetching trip:', error.message);
        setError('Error fetching trip. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

    const toggleSelectedRow = (productId) => {
    setSelectedRows((prevSelectedRows) => {
        if (prevSelectedRows.includes(productId)) {
        return prevSelectedRows.filter((id) => id !== productId);
        } else {
        return [...prevSelectedRows, productId];
        }
    })};

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="bg-white row mx-auto w-75 p-3 trip-container" style={{ marginTop: '20px', marginBottom: '20px' }}>
        {trip ? (
        <div>
            <div className='mb-3'> 
                <h1><u>Trip Information</u></h1>
                <div className="row" >
                    <div className="col-md-6 col-12">
                        {trip.shoppingLists.map((shoppingList) => (
                            <div key={shoppingList.shoppingListId}> 
                                <h4>{shoppingList.companyStore}</h4>
                                <span>
                                    <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(shoppingList.companyStoreAddress)}`}>
                                        {shoppingList.companyStoreAddress}
                                    </a>
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-6 col-12">
                        <p className='text-end m-0'>Estimated Travel Time: {trip.totalTravelTime} minutes</p>
                        <p className='text-end m-0'>Total Grocery Cost: ${trip.totalGroceryCost}</p>
                        <p className='text-end m-0'>Total Grocery Cost: ${trip.totalGasCost}</p>
                        <hr style={{marginTop: '8px', marginBottom: '8px'}}/>
                        <p className='text-end m-0'>Grand Total: ${trip.grandTotal}</p>
                    </div>
                </div>
            </div>
            {trip.shoppingLists.map((shoppingList) => (
            <div key={shoppingList.shoppingListId}>
                <h2 className='text-center'>{shoppingList.companyStore}</h2>
                <div className='table-responsive'>
                <table className="table">
                <thead>
                    <tr>
                    <th></th>
                    <th class="text-start">Name</th>
                    <th class="text-center">Price</th>
                    <th class="text-center">Quantity</th>
                    <th class="text-center">Total</th>
                    <th class="text-center">In Cart</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {shoppingList.shoppingListProductResponseList.map((product) => (
                    <tr key={product.id} className={selectedRows.includes(product.id) ? 'selected-row' : ''}>
                        <td><img src={product.productImage} alt={product.productName} className="product-image" /></td>
                        <td class="text-start align-items-end">{product.productName}</td>
                        <td class="text-center align-items-end">${product.price}</td>
                        <td class="text-center align-items-end">{product.quantity}</td>
                        <td class="text-center align-items-end">${product.total}</td>
                        <td class="text-center align-items-end">
                        <input
                            type="checkbox"
                            value="selected"
                            onClick={() => toggleSelectedRow(product.id)}
                        />
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
                </div>
            </div>
            ))}
        </div>
        ) : (
            <p>Loading...</p>
        )}
    </div>
  );
}

export default ShoppingList;

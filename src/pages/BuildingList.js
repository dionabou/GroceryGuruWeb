import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BuildingList.css";

export const BuildingList = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [trip, setTrip] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // New state for loading
  const inputRefs = useRef({});

  useEffect(() => {
    const fetchBuildingListData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/trips/?optimized=false&sequenced=false`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();
        setTrip(data);

        console.log(data);
        return data;
      } catch (error) {
        console.error('Error fetching shopping list data:', error.message);
        throw error;
      }
    };

    fetchBuildingListData();
  }, []);

  const handleUpdate = async (shoppingListId, shoppingListProductId, quantity) => {
    try {
      setIsLoading(true); // Set loading to true on button click

      const response = await fetch(`http://localhost:8080/api/shoppinglist/products`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ shoppingListId, shoppingListProductId, quantity }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      console.log('Product updated successfully!');

      // Simulate loading for 30 seconds
      setTimeout(() => {
        setIsLoading(false); // Set loading to false after 30 seconds
      }, 30000);

      // Refresh the page after successful update
      window.location.reload();
    } catch (error) {
      console.error('Error updating product:', error.message);
      setIsLoading(false); // Set loading to false on error
    }
  };

  const handleDelete = async (shoppingListId, shoppingListProductId, quantity) => {
    try {
      setIsLoading(true); // Set loading to true on button click

      const response = await fetch(`http://localhost:8080/api/shoppinglist/products/${shoppingListId}/${shoppingListProductId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });
  
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
  
      console.log('Product deleted successfully!');

      // Simulate loading for 30 seconds
      setTimeout(() => {
        setIsLoading(false); // Set loading to false after 30 seconds
      }, 30000);

      // Refresh the page after successful deletion
      window.location.reload();
    } catch (error) {
      console.error('Error deleting product:', error.message);
      setIsLoading(false); // Set loading to false on error
    }
  };

  const handleOptimize = async () => {
    try {
      setIsLoading(true); // Set loading to true on button click

      const response = await fetch(`http://localhost:8080/api/trips/optimize_trip`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      console.log('Trip optimized successfully!');

      // Simulate loading for 30 seconds
      setTimeout(() => {
        setIsLoading(false); // Set loading to false after 30 seconds
      }, 30000);

      // Redirect to the main page if optimization is successful
      navigate("/compare");
    } catch (error) {
      console.error('Error optimizing trip:', error.message);
      setIsLoading(false); // Set loading to false on error
    }
  };

  const handleShowList = async () => {
   
      navigate(`/trips/${trip.id}`);
   
  };

  return (
    <div className="bg-white row mx-auto w-75 p-3" style={{ marginTop: '20px' }}>
      {trip ? (
        <div>
          {trip.listname ? (
            <h1>{trip.listname}</h1>
          ) : (
            <h1>Your Trip</h1>
          )}
          {trip.shoppingLists.map((shoppingList) => (
            <div className="row align-items-end" key={shoppingList.shoppingListId}>
              <h2 className="col">{shoppingList.companyStore} - {shoppingList.companyStoreAddress}</h2>
              <p className="col"></p>
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th className="text-start">Name</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-center">Total</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {shoppingList.shoppingListProductResponseList.map((product) => (
                    <tr key={product.id}>
                      <td><img src={product.productImage} alt={product.productName} className="product-image" /></td>
                      <td className="text-start align-items-end">{product.productName}</td>
                      <td className="text-center align-items-end">${product.price}</td>
                      <td className="text-center align-items-end">
                        <input
                          type="number"
                          ref={(ref) => (inputRefs.current[product.id] = ref)}
                          defaultValue={product.quantity}
                          className="text-end"
                        />
                      </td>
                      <td className="text-center align-items-end">${product.total}</td>
                      <td className="text-center align-items-end">
                        <button
                          onClick={() => handleUpdate(shoppingList.shoppingListId, product.id, parseInt(inputRefs.current[product.id].value, 10))}
                        >
                          UPDATE
                        </button>
                      </td>
                      <td className="text-center align-items-end">
                        <button
                          onClick={() => {
                            if (window.confirm('Are you sure you want to delete this product?')) {
                              handleDelete(shoppingList.shoppingListId, product.id, parseInt(inputRefs.current[product.id].value, 10));
                            }
                          }}
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-end"><u><b>Grocery Cost: </b></u> ${shoppingList.groceryCost}</p>
            </div>
          ))}
          <br/>
          <p className="text-end"><u><b>Total Grocery Cost: </b></u> ${trip.totalGroceryCost}</p>

          <div className="button-container">
            <button className="show-list-button" onClick={handleShowList}>Show with this list</button>
            <button className="optimize-button" onClick={handleOptimize}>
              Optimize
            </button>

            
          </div>

          {/* Display loading message when isLoading is true */}
          {isLoading && <p style={{ color: 'blue', marginTop: '10px' }}>Page is loading, please wait...</p>}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

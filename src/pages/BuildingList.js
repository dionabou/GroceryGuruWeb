import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/BuildingList.css";

export const BuildingList = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [trip, setTrip] = useState(null);

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
      const response = await fetch(`http://localhost:8080/api/shoppinglist/products`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ shoppingListId, shoppingListProductId, quantity}),
      });
  
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
  
      // Parse the JSON response
      const updatedProduct = await response.json();
  
 
       console.log('Product updated successfully!');
    } catch (error) {
      console.error('Error updating product:', error.message);
    }
  };
  
  
  const handleDelete = async (shoppingListId, shoppingListProductId, quantity) => {
    try {
      const response = await fetch(`http://localhost:8080/api/shoppinglist/products`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ shoppingListId, shoppingListProductId, quantity}),
      });
  
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
  
      console.log('Product deleted successfully!');
    } catch (error) {
      console.error('Error deleting product:', error.message);
    }
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
                    <th class="text-start">Name</th>
                    <th class="text-center">Price</th>
                    <th class="text-center">Quantity</th>
                    <th class="text-center">Total</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {shoppingList.shoppingListProductResponseList.map((product) => (
                    <tr key={product.id}>
                      <td><img src={product.productImage} alt={product.productName} className="product-image" /></td>
                      <td class="text-start align-items-end">{product.productName}</td>
                      <td class="text-center align-items-end">${product.price}</td>
                      <td class="text-center align-items-end"><input class="text-end" defaultValue={product.quantity}></input></td>
                      <td class="text-center align-items-end">${product.total}</td>
                      <td class="text-center align-items-end">
                      <input
                        type="button"
                        value="UPDATE"
                        onClick={() => {
                          const newQuantity = product.quantity;
                          if (newQuantity !== null) {
                            handleUpdate(product.id, newQuantity);
                          }
                        }}
                      />
                      </td>
                      <td class="text-center align-items-end">
                        <input
                          type="button"
                          value="DELETE"
                          onClick={() => {
                            if (window.confirm('Are you sure you want to delete this product?')) {
                              handleDelete(product.id);
                            }
                          }}
                        />
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
            <button className="show-list-button" onClick={() => navigate("/main")}>Show with this list</button>
            <button className="optimize-button" onClick={() => navigate("/compare")}>
              Optimize
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

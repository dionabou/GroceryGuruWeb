import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SelectButton } from "./SelectButton";
import "../styles/UserCreatedBlock.css";

const UserCreatedBlock = ({ className, selectButtonImage, totalValue }) => {
  const [tripInfo, setTripInfo] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Retrieve the access token from localStorage
    const storedToken = localStorage.getItem("token");

    // Check if a token is available
    if (!storedToken) {
      setError("Access token not found. Please log in.");
      return;
    }

    // Fetch user-created trip info from the API
    const fetchTripInfo = async () => {
      try {
        const response = await fetch(`/api/trips/compare`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${storedToken}`, // Use the stored token
          },
        });

        if (response.status === 401) {
          setError("Unauthorized access. Please log in.");
          return;
        }

        if (!response.ok) {
          throw new Error("Failed to fetch trip info");
        }

        const data = await response.json();
        setTripInfo(data);
      } catch (error) {
        console.error("Error fetching trip info:", error);
        setError("Error fetching trip info. Please try again later.");
      }
    };

    fetchTripInfo();
  }, []); // Empty dependency array since we only want to run this effect once during component mount

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className={`user-created-block ${className}`}>
      {tripInfo.map((trip) => (
        <div key={trip.id}>
          <div className="text-wrapper-3">Total</div>
          <div className="text-wrapper-4">{trip.totalTravelTime}</div>

          {/* Render shopping lists for each trip */}
          {trip.shoppingLists.map((shoppingList) => (
            <div key={shoppingList.shoppingListId}>
              <div>Store: {shoppingList.companyStore}</div>
              <div>Address: {shoppingList.companyStoreAddress}</div>

              {/* Render products for each shopping list */}
              {shoppingList.shoppingListProductResponseList.map((product) => (
                <div key={product.id}>
                  <div>{product.productName}</div>
                  <div>Quantity: {product.quantity}</div>
                  <div>Price: {product.price}</div>
                  <div>Total: {product.total}</div>
                  {/* Include product image */}
                  <img src={product.productImage} alt={product.productName} style={{ maxWidth: "100px" }} />
                  {/* Add more fields as needed */}
                </div>
              ))}
              
              <div>Grocery Cost: {shoppingList.groceryCost}</div>
            </div>
          ))}
          
          {/* Render other components using trip properties */}
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="rectangle" />
              <div className="text-wrapper-32">Select</div>
              {/* Wrap the SelectButton with Link for navigation */}
              <Link to="../ShoppingList/Main" className="select-link">
                <SelectButton className="select-button-instance" />
              </Link>
            </div>
          </div>
          <div className="text-wrapper-33">Grand Total: {trip.grandTotal}</div>
        </div>
      ))}
    </div>
  );
};

export { UserCreatedBlock };

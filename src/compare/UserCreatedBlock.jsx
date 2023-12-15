import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SelectButton } from "./SelectButton";
import "../styles/UserCreatedBlock.css";

const UserCreatedBlock = ({ className, totalValue, onSelect }) => {
  const [tripInfo, setTripInfo] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (!storedToken) {
      setError("Access token not found. Please log in.");
      return;
    }

    const fetchTripInfo = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/trips/compare`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${storedToken}`,
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
        // const lowerIdData = data.find((trip) => trip.id === 4);
        const lowerIdData = data[0].id < data[1].id ? data[0] : data[1];

        setTripInfo(lowerIdData ? [lowerIdData] : []);
      } catch (error) {
        console.error("Error fetching trip info:", error);
        setError("Error fetching trip info. Please try again later.");
      }
    };

    fetchTripInfo();
  }, []);

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
                </div>
              ))}

              <div>Grocery Cost: {shoppingList.groceryCost}</div>
            </div>
          ))}
          
          {/* Render other components using trip properties */}
          <div className="overlap-group-wrapper">
            {/* <div className="overlap-group"> */}
              {/* <div className="rectangle" /> */}
              {/* <div className="text-wrapper-32">Select</div> */}
              {/* Wrap the SelectButton with Link for navigation */}
              {/* <Link to={`../Main?tripId=${trip.id}`} className="select-link"> */}
              <Link to={`/trips/${trip.id}`} className="select-link">
                <SelectButton onClick={() => onSelect("UserCreated")} className="select-button-instance" />
              </Link>
            {/* </div> */}
          </div>
          
          <div className="text-wrapper-33">Grand Total: {trip.grandTotal}</div>
          <div className="text-wrapper-81">Total Gas Cost: {trip.totalGasCost}</div>
          <div className="text-wrapper-82">Total Grocery Cost: {trip.totalGroceryCost}</div>
        </div>
      ))}
    </div>
  );
};

export { UserCreatedBlock };

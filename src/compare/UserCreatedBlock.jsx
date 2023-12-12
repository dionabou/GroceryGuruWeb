import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SelectButton } from "./SelectButton";
import "../styles/UserCreatedBlock.css";

const UserCreatedBlock = ({ className, selectButtonImage, totalValue }) => {
  const [tripInfo, setTripInfo] = useState({
    user_trip_id: null,
    active_trip: null,
    favorite_trip: null,
    gas_cost: null,
    grocery_cost: null,
    list_name: "",
    optimized: null,
    travel_time: null,
    user_id: null,
  });

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
      <div className="text-wrapper-3">Total</div>
      <div className="text-wrapper-4">{tripInfo.travel_time}</div>
      {/* ... (other components using tripInfo properties) ... */}
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
      <div className="text-wrapper-33">{totalValue}</div>
    </div>
  );
};

export { UserCreatedBlock };

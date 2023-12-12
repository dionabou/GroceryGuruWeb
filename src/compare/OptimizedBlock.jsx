import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SelectButton } from "./SelectButton";
import "../styles/OptimizedBlock.css";

const OptimizedBlock = ({ className, selectButtonImage, totalValue }) => {
  const [optimizedData, setOptimizedData] = useState({
    user_trip_id: null,
    active_trip: null,
    favorite_trip: null,
    gas_cost: null,
    grocery_cost: null,
    list_name: "",
    optimized: null,
    travel_time: null,
    user_id: null,
    egg_total: null, // Assuming egg_total is a property in your API response
    // ... (other properties)
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

    // Fetch optimized data from the API
    const fetchOptimizedData = async () => {
      try {
        const response = await fetch('/api/trips/compare', {
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
          throw new Error("Failed to fetch optimized data");
        }

        const data = await response.json();
        setOptimizedData(data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching optimized data:", error);
        setError("Error fetching optimized data. Please try again later.");
      }
    };

    fetchOptimizedData();
  }, []); // Empty dependency array since we only want to run this effect once during component mount

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className={`optimized-block ${className}`}>
      {/* ... (other components using optimizedData properties) ... */}
      <div className="text-wrapper-70">{optimizedData.egg_total}</div>
      {/* Wrap the SelectButton with Link for navigation */}
      <Link to="../ShoppingList/Main" className="select-link">
        <SelectButton className="select-button-instance" />
      </Link>
      <div className="text-wrapper-71">Total</div>
      <div className="text-wrapper-72">{totalValue}</div>
    </div>
  );
};

export { OptimizedBlock };

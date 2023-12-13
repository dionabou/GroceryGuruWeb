import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SelectButton } from "./SelectButton";
import "../styles/OptimizedBlock.css";

const OptimizedBlock = ({ className, selectButtonImage, totalValue }) => {
  const [optimizedData, setOptimizedData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/trips/compare', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (response.status === 401) {
          setError("Unauthorized access. Please log in.");
          return;
        }

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setOptimizedData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className={`optimized-block ${className}`}>
      {optimizedData.map((optimized) => (
        <div key={optimized.id}>
          <div className="text-wrapper-3">Total</div>
          <div className="text-wrapper-4">{optimized.totalTravelTime}</div>

          {optimized.shoppingLists.map((shoppingList) => (
            <div key={shoppingList.shoppingListId}>
              <div>Store: {shoppingList.companyStore}</div>
              <div>Address: {shoppingList.companyStoreAddress}</div>

              {shoppingList.shoppingListProductResponseList.map((product) => (
                <div key={product.id}>
                  <div>{product.productName}</div>
                  <div>Quantity: {product.quantity}</div>
                  <div>Price: {product.price}</div>
                  <div>Total: {product.total}</div>
                  <img src={product.productImage} alt={product.productName} style={{ maxWidth: "100px" }} />
                </div>
              ))}

              <div>Grocery Cost: {shoppingList.groceryCost}</div>
            </div>
          ))}

          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="rectangle" />
              <div className="text-wrapper-32">Select</div>
              <Link to="../ShoppingList/Main" className="select-link">
                <SelectButton className="select-button-instance" />
              </Link>
            </div>
          </div>
          <div className="text-wrapper-33">Grand Total: {optimized.grandTotal}</div>
          <div className="text-wrapper-81">{totalValue}</div>
        </div>
      ))}
    </div>
  );
};

export { OptimizedBlock };

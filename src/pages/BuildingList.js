import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/BuildingList.css";

export const BuildingList = () => {
  const navigate = useNavigate();
  const { shoppingListProductId } = useParams();
  const [storeName, setStoreName] = useState("");
  const [storeLocation, setStoreLocation] = useState("");
  const [products, setProducts] = useState([]);
  const [totalGasCost, setTotalGasCost] = useState("");
  const [totalTravelTime, setTotalTravelTime] = useState("");
  const [totalGroceryCost, setTotalGroceryCost] = useState("");
  const [grandTotal, setGrandTotal] = useState("");
  const token = localStorage.getItem("token");

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

      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching shopping list data:', error.message);
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const shoppingListData = await fetchBuildingListData(shoppingListProductId);
        setStoreName(shoppingListData.storeName);
        setStoreLocation(shoppingListData.storeLocation);
        setProducts(shoppingListData.products);
        setTotalGasCost(shoppingListData.totalGasCost);
        setTotalTravelTime(shoppingListData.totalTravelTime);
        setTotalGroceryCost(shoppingListData.totalGroceryCost);
        setGrandTotal(shoppingListData.grandTotal);
      } catch (error) {
        console.error('Error fetching shopping list data:', error.message);
      }
    };

    fetchData();
  }, [shoppingListProductId]);

  return (
    <div className="building-list">
      <div className="text-shopping-list">Your Shopping List</div>
      <div className="div-2">
        <div className="user-created-block">
          <div className="store-info">
            <label className="store-label">
              <u>Store:</u>
            </label>
            <label className="store-name">{storeName}</label>

            <label className="location-label">
              <u>Location:</u>
            </label>
            <label className="location-data">{storeLocation}</label>
          </div>

          <div className="shopping-list-header">
            
            <label className="shopping-list-Products">Products</label>
            <label className="shopping-list-Qty">Qty</label>
            <label className="shopping-list-Price">Price</label>
            <label className="shopping-list-Total">Total</label>
          </div>
          



  {products && products.length > 0 ? (
    products.map((product, index) => (
      <div key={index} className="product-container">
        <div className="image-container">
          {product.imageUrl ? (
            <img className="image" alt="Product" src={product.imageUrl} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <label>{product.quantity}</label>
        <label>{product.price}</label>
        <label>{product.total}</label>
      </div>
    ))
  ) : (
    <p>No products available.</p>
  )}


          <hr />

          <div className="financial-info">
            <label>
              <label className="financial-label">Total Gas Cost:</label>
              <label className="financial-value">{totalGasCost}</label>
            </label>
            <label>
              <label className="financial-label">Total Travel Time:</label>
              <label className="financial-value">{totalTravelTime}</label>
            </label>

            <label>
              <label className="financial-label">Total Grocery Cost:</label>
              <label className="financial-value">{totalGroceryCost}</label>
            </label>

            <label>
              <label className="financial-label">Grand Total:</label>
              <label className="financial-value">{grandTotal}</label>
            </label>
          </div>

          <div className="button-container">
            <button className="show-list-button">Show with this list</button>
            <button className="optimize-button" onClick={() => navigate("/compare")}>
              Optimize
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

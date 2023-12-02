import React from "react";
import "../styles/BuildingList.css";

export const BuildingList = () => {
  // Sample store name and location (replace it with data)
  const storeName = "Sample Store";
  const storeLocation = "Sample Location";

  const productsData = [
    { id: 1, name: "", quantity: 2, price: 10, total: 20 },
    { id: 2, name: "", quantity: 1, price: 15, total: 15 },
    { id: 3, name: "", quantity: 1, price: 15, total: 15 },
    { id: 4, name: "", quantity: 1, price: 15, total: 15 },
    // Add more product data as needed
  ];

  const subtotal = "$50.00"; // Replace with data from database
  const tax = "$5.00"; 
  const gasCost = "$10.00"; 
  const total = "$65.00"; 

  const travelTime = "Travel Time";
  const travelTimeValue = "2 hours"; 

  return (
    <div className="building-list">
      <div className="text-shopping-list">Your Shopping List</div>
      <div className="div-2">
        <div className="user-created-block">
          {/* Store information at the top */}
          <div className="store-info">
            <label className="store-label"><u>Store:</u></label>
            <label className="store-name">{storeName}</label>

            {/* Location label and data */}
            <label className="location-label"><u>Location:</u></label>
            <label className="location-data">{storeLocation}</label>
          </div>

          {/* Additional labels for Products, Qty, Price, and Total */}
          <div className="shopping-list-header">
            <label className="shopping-list-Products">Products</label>
            <label className="shopping-list-Qty">Qty</label>
            <label className="shopping-list-Price">Price</label>
            <label className="shopping-list-Total">Total</label>
          </div>

          {/* Render containers based on the data */}
          {productsData.map((product) => (
            <div key={product.id} className="product-container">
              <img src={`path/to/product/${product.id}.jpg`} alt={`Product ${product.id}`} />
              <label>{product.name}</label>
              <label>{product.quantity}</label>
              <label>{product.price}</label>
              <label>{product.total}</label>
            </div>
          ))}

          {/* Add a line after all the products */}
          <hr />

          {/* Label for Travel Time and its value */}
          <div className="travel-time">
            <label className="travel-time-label"><u>{travelTime}:</u></label>
            <label className="travel-time-value">{travelTimeValue}</label>
          </div>


          {/* Financial information */}
      <div className="financial-info">
        <label>
          <label className="financial-label">Subtotal:</label>
          <label className="financial-value">{subtotal}</label>
        </label>
    <label>
        <label className="financial-label">Tax:</label>
        <label className="financial-value">{tax}</label>
  </label>

  <label>
        <label className="financial-label">Gas Cost:</label>
        <label className="financial-value">{gasCost}</label>
  </label>

  <label>
        <label className="financial-label">Total:</label>
        <label className="financial-value">{total}</label>
        </label>
      </div>


          {/* Buttons at the bottom */}
          <div className="button-container">
            <button className="show-list-button">Show with this list</button>
            <button className="optimize-button">Optimize</button>
          </div>
        </div>
      </div>
    </div>
  );
};

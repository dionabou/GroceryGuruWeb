// ProductDetails.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/ProductDetails.css";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProductData = async (productId) => {
    // API call
    const response = await fetch('http://localhost:8080/api/products/1');
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    // Fetch product data when component mounts
    const fetchData = async () => {
      const productData = await fetchProductData(productId);
      setProduct(productData);
    };

    fetchData();
  }, [productId]);

  const handleGoBack = () => {
    //  logic for going back
    console.log("Go Back");
    
    navigate("/Categories");
  };

  const handleAddToList = () => {
    //  logic for adding to the list
    console.log("Add to List", product);
   
  };

  const handleContinueShopping = () => {
    // Implement logic for continuing shopping
    console.log("Continue Shopping");
  
    navigate("/Categories");
  };

  const handleQuantityChange = (value) => {
  
    console.log(`Quantity changed to ${value}`);
   
  };

  return (
    <div className="product-details">
      {/* Go Back Button */}
      <div className="back-button">
        <button className="go-back" onClick={handleGoBack}>
          &lt; Go Back
        </button>
      </div>

     
      <div className="image-container">
        <img className="image" alt="Product" src={product?.image} />
      </div>

      {/* Product Details on the right */}
      <div className="details-container">
        <p className="product-description">
          {/* Dynamic product details */}
          {product ? (
            <>
              {product.name}
              <br />
              <br />
              UPC: {product.upc}
              <br />
              <br />
              Size: {product.size}
              <br />
              <br />
              {product.details}
              <br />
              <br />
              Located in {product.category}
              <br />
              <br />
              
              <br />
              <br />
              ${product.price} per unit
            </>
          ) : (
            "Loading..."
          )}
        </p>

        {/* Quantity Box */}
        <div className="quantity-box">
          <div className="decrement" onClick={() => handleQuantityChange(-1)}>
            -
          </div>
          <div className="quantity">1</div> {/* Replace with dynamic value */}
          <div className="increment" onClick={() => handleQuantityChange(1)}>
            +
          </div>
        </div>

        {/* Continue Shopping and Add to List Buttons */}
        <div className="button-container">
          {/* Continue Shopping Button */}
          <button className="continue-shopping" onClick={handleContinueShopping}>
            Continue Shopping
          </button>

          {/* Add to List Button */}
          <button className="add-to-list" onClick={handleAddToList}>
            Add to List
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

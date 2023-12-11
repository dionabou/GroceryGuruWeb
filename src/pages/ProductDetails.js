// ProductDetails.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "../styles/ProductDetails.css";

// Function to capitalize the first letter of a string
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const ProductDetails = () => {
  const navigate = useNavigate();
  const { companyStoreProductId } = useParams();
  const [product, setProduct] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const token = localStorage.getItem("token");


  const fetchProductData = async (companyStoreProductId) => {
    try {
      // API call with custom headers
      const response = await fetch(`http://localhost:8080/api/products/${companyStoreProductId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json', 
        },
      });
  
      // Log the response 
      console.log('API Response:', response);
  
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
  
      // Check if the response body is empty
      const text = await response.text();
      if (!text.trim()) {
        console.warn('Empty response received.');
        return null;
      }
  
      // Parse JSON only if the response is not empty
      const data = JSON.parse(text);
      return data;
    } catch (error) {
      console.error('Error fetching product data:', error.message);
      throw error; // Rethrow the error to indicate the failure
    }
  };
  
  useEffect(() => {
    // Fetch product data when component mounts
    const fetchData = async () => {
      const productData = await fetchProductData(companyStoreProductId);
      setProduct(productData);
    };

    fetchData();
  }, [companyStoreProductId]);
  

  const handleGoBack = () => {
    //  logic for going back
    console.log("Go Back");
    
    navigate("/Categories");
  };

  const handleAddToList = async () => {
    try {
      // Ensure there is a valid product and quantity
      if (!product || quantity <= 0) {
        console.error('Invalid product or quantity.');
        return;
      }
  
      // Define the data to be sent in the POST request
      const postData = {
        companyStoreProductId: product.id,
        quantity: quantity,
      };
  
      // Make the POST request
      const response = await fetch('http://localhost:8080/api/shoppinglist/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token} `
        },
        body: JSON.stringify(postData),
      });
  
      // Log the response
      console.log('Add to List Response:', response);
  
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
  
      // Handle the success case
      console.log('Product added to the list successfully!');
  
      // Navigate to the Categories page
      navigate('/Categories');
    } catch (error) {
      console.error('Error adding product to the list:', error.message);
    }
  };
  

  const handleToggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  const [quantity, setQuantity] = useState(1); // Initialize quantity state with 1

  const handleQuantityChange = (value) => {
    // Ensure the quantity doesn't go below 1
    const newQuantity = Math.max(quantity + value, 1);
    setQuantity(newQuantity);
  };

  return (
    
    <div class="details-container">
   <h1 className="paged-title">Product Details</h1>
    <div className="product-details">
      
      {/* Go Back Button */}
      <div className="back-button">
        <button className="go-back" onClick={handleGoBack}>
          &lt; Go Back
        </button>
      </div>

     
      <div className="image-container">
        {/* Display the image if available, otherwise show a placeholder */}
        {product ? (
          <img className="image" alt="Product" src={product.imageUrl} />

          ) : (
          <p>Loading...</p>
        )}
      </div>

      {/* Product Details on the right */}
      <div className="details-container">
        <p className="product-description">
          {/* Dynamic product details */}
          {product ? (
            <>
            
            
            <br />
            <u><b>Product Name:</b></u> {capitalizeFirstLetter(product.name)}
             
              <br />
              {product.details && (
              <>
              <u><b>Description:</b></u> {product.description}
              <br />
              </>
              )}

              <br />
              <u><b>Location:</b></u> {product.aisleLocation}
              <br />
              <br />
              <u><b>Price:</b></u> ${product.price} per unit
            </>
          ) : (
            "Loading..."
          )}
        </p>

       {/* Quantity Input Box with Label */}
       <div className="quantity-box">
            <label htmlFor="quantity" className="quantity-label">
            <u> <b> Quantity: </b> </u>
            </label>
            <input
              type="number"
              id="quantity"
              className="quantity"
              value={quantity}
              onChange={(e) => {
                const newValue = parseInt(e.target.value, 10) || 1;
                setQuantity(newValue);
              }}
            />
          </div>

        {/* Continue Shopping and Add to List Buttons */}
        <div className="button-container">

          {/* Add to List Button */}
          <button className="add-to-list" onClick={handleAddToList}>
            Add to List
          </button>
        </div>


        {/* Add to Favorites Icon */}
      <div className="button-container">
        <button
          className={`add-to-favorites ${isFavorite ? "favorited" : ""}`}
          onClick={handleToggleFavorite}
        >
          <FontAwesomeIcon icon={faHeart} />
          {isFavorite ? " Remove from Favorites" : " Add to Favorites"}
        </button>
      </div>
      
      </div>
    </div>
    </div>
  );
};

export default ProductDetails;

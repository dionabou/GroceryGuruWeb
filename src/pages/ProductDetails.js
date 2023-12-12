// ProductDetails.js
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";

import "../styles/ProductDetails.css";

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
      const response = await fetch(`http://localhost:8080/api/products/${companyStoreProductId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const text = await response.text();
      if (!text.trim()) {
        console.warn('Empty response received.');
        return null;
      }

      const data = JSON.parse(text);
      return data;
    } catch (error) {
      console.error('Error fetching product data:', error.message);
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const productData = await fetchProductData(companyStoreProductId);
      setProduct(productData);
    };

    fetchData();
  }, [companyStoreProductId]);

  const handleGoBack = () => {
    navigate("/BuildingList");
  };

  const addToFavorites = async (companyStoreProductId) => {
    try {
      const response = await fetch('http://localhost:8080/api/favorites/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ companyStoreProductId }),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to add to favorites: ${response.status}`);
      }
  
      console.log('Added to favorites successfully!');
    } catch (error) {
      console.error('Error adding to favorites:', error.message);
    }
  };
  
  const removeFromFavorites = async (companyStoreProductId) => {
    try {
      const response = await fetch('http://localhost:8080/api/favorites/products', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ companyStoreProductId }),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to remove from favorites: ${response.status}`);
      }
  
      console.log('Removed from favorites successfully!');
    } catch (error) {
      console.error('Error removing from favorites:', error.message);
    }
  };
  
  const handleToggleFavorite = async () => {
    try {
      if (!product) {
        console.error('Invalid product.');
        return;
      }

      const companyStoreProductId = product.id;

      // Toggle isFavorite state optimistically
      setIsFavorite((prevIsFavorite) => !prevIsFavorite);

      // Call the appropriate function based on the current state
      if (isFavorite) {
        await removeFromFavorites(companyStoreProductId);
      } else {
        await addToFavorites(companyStoreProductId);
      }
    } catch (error) {
      console.error('Error toggling favorite:', error.message);
      // Revert isFavorite state if an error occurs
      setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    }
  };

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(quantity + value, 1);
    setQuantity(newQuantity);
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

  return (
    <div className="details-container">
      <h1 className="paged-title">Product Details</h1>
      <div className="product-details">
        <div className="back-button">
          <button className="go-back" onClick={handleGoBack}>
            &lt; Go Back
          </button>
        </div>

        <div className="image-container">
          {product ? (
            <img className="image" alt="Product" src={product.imageUrl} />
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <div className="details-container">
          <p className="product-description">
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

          <div className="button-container">
            <button className="add-to-list" onClick={handleAddToList}>
              Add to List
            </button>
          </div>

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

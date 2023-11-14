import React from "react";
import "../styles/ProductDetails.css";

export const ProductDetails = () => {
  return (
    <div className="product-details">
      <div className="div-2">
        <div className="image-container">
          <img className="image" alt="image" src="../assets/milk.png" />
        </div>
        <div className="overlap">
          <p className="kroger-reduced-fat">
            Kroger® 2% Reduced Fat Milk
            <br />
            <br />
            UPC: 0001111041700
            <br />
            <br />
            Size: 1 gal
            <br />
            <br />
            Product Details
            <br />
            Kroger 2% Reduced Fat Milk has a rich and creamy taste that is the perfect addition to your morning cereal
            or coffee. It's a great choice for anyone looking to maintain a healthy diet. Plus, with its reduced fat
            content, you can indulge in the creamy goodness of milk without worrying about excessive fat intake.
            <br />
            120 calories per serving
            <br />
            <br />
            Located in DAIRY
            <br />
            <br />
            &lt;Link to product page&gt;
            <br />
            <br />
            $2.69 per stocking unit
            <br />
            $2.69 per gal
          </p>
          <div className="select-button">
            <div className="overlap-group">
              <div className="rectangle" />
              <div className="frame">
                <div className="text-wrapper-3">Continue Shopping</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-4">Store: Kroger</div>
        <p className="p">Location: 123 Meadow Lane, Cincinnati, OH 45203</p>
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="rectangle" />
            <div className="div-wrapper">
              <div className="text-wrapper-3">Add to List</div>
            </div>
          </div>
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-5">1</div>
        </div>
        <div className="text-wrapper-6">qty</div>
        <div className="overlap-3">
          <div className="text-wrapper-7">-</div>
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-7">+</div>
        </div>
        <div className="back-button">
          <div className="go-back-wrapper">
            <div className="go-back">&lt; Go Back</div>
          </div>
        </div>
      </div>
    </div>
  );
};

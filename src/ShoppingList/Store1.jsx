import React from "react";
import "../styles/Store1.css";

export const Store1 = ({ className }) => {
  return (
    <div className={`store1 ${className}`}>
      <div className="text-wrapper-17">In Cart</div>
      <div className="rectangle" />
      <div className="text-wrapper-18">Aisle: Dairy</div>
      <div className="text-wrapper-19">Qty</div>
      <div className="text-wrapper-20">Price</div>
      <div className="text-wrapper-21">Product</div>
      <div className="text-wrapper-22">Store: Kroger</div>
      <img className="malk" alt="Malk" src="/img/malk-2.png" />
      <div className="text-wrapper-23">1</div>
      <p className="text-wrapper-24">Kroger® 2% Reduced Fat Milk</p>
      <div className="text-wrapper-25">1.79</div>
      <div className="text-wrapper-26">1</div>
      <div className="text-wrapper-27">1.37</div>
      <div className="text-wrapper-28">Broccoli Crowns</div>
      <img className="broc" alt="Broc" src="/img/broc-2.png" />
      <div className="text-wrapper-29">Aisle: Produce</div>
      <div className="overlap-group-3">
        <div className="rectangle-2" />
        <div className="text-wrapper-30">X</div>
      </div>
    </div>
  );
};

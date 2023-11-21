import React from "react";
import "../styles/Store2.css";

export const Store2 = ({ className }) => {
  return (
    <div className={`store2 ${className}`}>
      <div className="text-wrapper-31">Store: Meijer</div>
      <div className="text-wrapper-32">9.78</div>
      <div className="text-wrapper-33">1</div>
      <div className="text-wrapper-34">1</div>
      <p className="text-wrapper-35">Meijer 100% All Natural Boneless Skinless Chicken Breasts with Rib Meat</p>
      <div className="text-wrapper-36">Qty</div>
      <div className="text-wrapper-37">Price</div>
      <div className="overlap-group-4">
        <div className="text-wrapper-38">Product</div>
        <img className="meijerchick" alt="Meijerchick" src="/img/meijerchick-1.png" />
      </div>
      <img className="meijeregg" alt="Meijeregg" src="/img/meijeregg-1.png" />
      <p className="text-wrapper-39">Meijer Cage Free Grade A Large Eggs, Dozen</p>
      <div className="text-wrapper-40">1.69</div>
      <div className="rectangle-3" />
      <div className="rectangle-4" />
    </div>
  );
};

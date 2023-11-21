import React from "react";
import { SelectButton } from "./SelectButton";
import "../styles/OptimizedBlock.css";

export const OptimizedBlock = ({ className }) => {
  return (
    <div className={`optimized-block ${className}`}>
      <div className="text-wrapper-35">9.78</div>
      <div className="text-wrapper-36">9.78</div>
      <div className="text-wrapper-37">1</div>
      <div className="text-wrapper-38">1</div>
      <div className="text-wrapper-39">Qty</div>
      <div className="text-wrapper-40">Total</div>
      <div className="text-wrapper-41">Price</div>
      <div className="text-wrapper-42">Product</div>
      <p className="text-wrapper-43">Location: 123 Meadow Lane, Cincinnati, OH 45203</p>
      <div className="text-wrapper-44">Store: Kroger</div>
      <p className="text-wrapper-45">Meijer 100% All Natural Boneless Skinless Chicken Breasts with Rib Meat</p>
      <p className="text-wrapper-46">Location: 16 Crutch St, Cincinnati, OH 45203</p>
      <div className="text-wrapper-47">Store: Meijer</div>
      <div className="text-wrapper-48">Qty</div>
      <div className="text-wrapper-49">Total</div>
      <div className="text-wrapper-50">Price</div>
      <div className="overlap">
        <div className="text-wrapper-51">Product</div>
        <img className="meijerchick" alt="Meijerchick" src="/img/meijerchick-1.png" />
      </div>
      <div className="text-wrapper-52">1.79</div>
      <img className="img" alt="Malk" src="/img/malk-1.png" />
      <div className="text-wrapper-53">1</div>
      <p className="text-wrapper-54">Kroger® 2% Reduced Fat Milk</p>
      <div className="text-wrapper-55">1.79</div>
      <div className="text-wrapper-56">36 minutes</div>
      <div className="text-wrapper-57">Travel Time:</div>
      <div className="text-wrapper-58">3.00</div>
      <div className="text-wrapper-59">Gas Cost</div>
      <div className="text-wrapper-60">Tax</div>
      <div className="text-wrapper-61">Subtotal</div>
      <img className="line-2" alt="Line" src="/img/line-2.svg" />
      <div className="text-wrapper-62">14.63</div>
      <div className="text-wrapper-63">1.14</div>
      <div className="text-wrapper-64">1</div>
      <div className="text-wrapper-65">1.37</div>
      <div className="text-wrapper-66">1.37</div>
      <div className="text-wrapper-67">Broccoli Crowns</div>
      <img className="broc-2" alt="Broc" src="/img/broc-1.png" />
      <img className="meijeregg" alt="Meijeregg" src="/img/meijeregg-1.png" />
      <p className="text-wrapper-68">Meijer Cage Free Grade A Large Eggs, Dozen</p>
      <div className="text-wrapper-69">1.69</div>
      <div className="text-wrapper-70">1.69</div>
      <SelectButton className="select-button-instance" />
      <div className="text-wrapper-71">Total</div>
      <div className="text-wrapper-72">18.77</div>
    </div>
  );
};

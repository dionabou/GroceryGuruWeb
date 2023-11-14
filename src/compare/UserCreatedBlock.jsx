import React from "react";
import "../styles/UserCreatedBlock.css";

export const UserCreatedBlock = ({ className }) => {
  return (
    <div className={`user-created-block ${className}`}>
      <div className="text-wrapper-3">Total</div>
      <div className="text-wrapper-4">26 minutes</div>
      <div className="text-wrapper-5">Travel Time:</div>
      <div className="text-wrapper-6">2.00</div>
      <div className="text-wrapper-7">Gas Cost</div>
      <div className="text-wrapper-8">Tax</div>
      <div className="text-wrapper-9">Subtotal</div>
      <img className="chick" alt="Chick" src="/img/chick-1.png" />
      <div className="text-wrapper-10">1.79</div>
      <img className="malk" alt="Malk" src="/img/malk-1.png" />
      <p className="heritage-farm">Heritage Farm® Boneless &amp; Skinless Chicken Breasts with Rib Meat</p>
      <div className="text-wrapper-11">1</div>
      <p className="p">Kroger® 2% Reduced Fat Milk</p>
      <img className="egg" alt="Egg" src="/img/egg-1.png" />
      <div className="text-wrapper-12">3.98</div>
      <div className="text-wrapper-13">1.99</div>
      <p className="text-wrapper-14">Kroger® Grade A Large White Eggs</p>
      <div className="text-wrapper-15">2</div>
      <div className="text-wrapper-16">Qty</div>
      <div className="text-wrapper-17">Total</div>
      <div className="text-wrapper-18">Price</div>
      <div className="text-wrapper-19">Product</div>
      <p className="text-wrapper-20">Location: 123 Meadow Lane, Cincinnati, OH 45203</p>
      <div className="text-wrapper-21">Store: Kroger</div>
      <div className="text-wrapper-22">1.79</div>
      <div className="text-wrapper-23">1</div>
      <div className="text-wrapper-24">1</div>
      <div className="text-wrapper-25">14.14</div>
      <div className="text-wrapper-26">1.37</div>
      <div className="text-wrapper-27">1.37</div>
      <div className="text-wrapper-28">14.14</div>
      <img className="line" alt="Line" src="/img/line-1.svg" />
      <div className="text-wrapper-29">19.91</div>
      <div className="text-wrapper-30">1.55</div>
      <div className="text-wrapper-31">Broccoli Crowns</div>
      <img className="broc" alt="Broc" src="/img/broc-1.png" />
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="text-wrapper-32">Select</div>
        </div>
      </div>
      <div className="text-wrapper-33">23.46</div>
    </div>
  );
};

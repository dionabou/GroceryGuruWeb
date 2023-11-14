import React from "react";
import "../styles/TripInfo.css";

export const TripInfo = ({ className }) => {
  return (
    <div className={`trip-info ${className}`}>
      <div className="overlap">
        <div className="overlap-group">
          <div className="text-wrapper-3">Total</div>
          <div className="overlap-2">
            <div className="overlap-3">
              <p className="p">Location: 16 Crutch St, Cincinnati, OH 45203</p>
              <div className="text-wrapper-4">Store: Meijer</div>
              <div className="text-wrapper-5">Gas Cost</div>
              <img className="line" alt="Line" src="/img/line-2.svg" />
            </div>
            <div className="overlap-group-2">
              <p className="text-wrapper-6">Location: 123 Meadow Lane, Cincinnati, OH 45203</p>
              <div className="text-wrapper-7">Tax</div>
              <div className="text-wrapper-8">Subtotal</div>
              <div className="text-wrapper-9">Store: Kroger</div>
            </div>
            <div className="text-wrapper-10">Estimated Travel Time:</div>
            <div className="text-wrapper-11">3.00</div>
            <div className="text-wrapper-12">1.14</div>
          </div>
        </div>
        <div className="text-wrapper-13">36 minutes</div>
        <div className="text-wrapper-14">14.63</div>
        <div className="text-wrapper-15">18.77</div>
      </div>
      <div className="text-wrapper-16">Trip Information</div>
    </div>
  );
};

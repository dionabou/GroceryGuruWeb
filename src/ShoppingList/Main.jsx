import React from "react";
import { Store1 } from "../ShoppingList/Store1";
import { Store2 } from "../ShoppingList/Store2";
import { TripInfo } from "../ShoppingList/TripInfo";
import "../styles/Main.css";

export const Main = () => {
  return (
    <div className="main">
      <div className="div-2">
        <TripInfo className="trip-info-instance" />
        <Store1 className="store1-instance" />
        <Store2 className="store2-instance" />
        <div className="text-wrapper-41">Trip Name:</div>
        <div className="text-wrapper-42">The Essentials</div>
        <div className="text-wrapper-43">Edit</div>
        <div className="text-wrapper-44">Add Trip to Favorites</div>
        <div className="text-wrapper-45">Actions:</div>
        <div className="text-wrapper-46">Print Trip</div>
        <div className="text-wrapper-47">Select a Different Trip</div>
      </div>
    </div>
  );
};

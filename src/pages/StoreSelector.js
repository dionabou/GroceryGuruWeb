import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/StoreSelector.css";

function StoreSelector() {
  const [selectedStores, setSelectedStores] = useState([]);

  const handleStoreSelection = (store) => {
    if (selectedStores.includes(store)) {
      setSelectedStores(selectedStores.filter(s => s !== store));
    } else {
      setSelectedStores([...selectedStores, store]);
    }
  }

  return (
    <div className="StoreSelector-container">
      <h2>Store Selector</h2>
      <label>
        <input
          type="checkbox"
          value="Aldi"
          checked={selectedStores.includes('Aldi')}
          onChange={() => handleStoreSelection('Aldi')}
        />
        Aldi
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="Kroger"
          checked={selectedStores.includes('Kroger')}
          onChange={() => handleStoreSelection('Kroger')}
        />
        Kroger
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="Target"
          checked={selectedStores.includes('Target')}
          onChange={() => handleStoreSelection('Target')}
        />
        Target
      </label>
      <br />
      <p>Selected Stores: {selectedStores.join(', ')}</p>

      {/* Navigation button to the "Categories" page */}
      <div>
        <Link to="/Categories">
          <button className="button">See Categories</button>
        </Link>
      </div>
    </div>
  );
}

export default StoreSelector;

import React, { useState } from 'react';
import "../styles/StoreSelector.css";

function StoreSelector() {
  const [selectedStores, setSelectedStores] = useState([]);

  const handleStoreSelection = (store) => {
    if (selectedStores.includes(store)) {
      // If the store is already selected, remove it
      setSelectedStores(selectedStores.filter(s => s !== store));
    } else {
      // If the store is not selected, add it
      setSelectedStores([...selectedStores, store]);
    }
  }

  return (
    <div className="StoreSelector-container"> {/* Apply the style here */}
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
          value="Meijer"
          checked={selectedStores.includes('Meijer')}
          onChange={() => handleStoreSelection('Meijer')}
        />
        Meijer
      </label>
      <br />
      <p>Selected Stores: {selectedStores.join(', ')}</p>
    </div>
  );
}

export default StoreSelector;

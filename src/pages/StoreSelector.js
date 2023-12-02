import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/StoreSelector.css";

function StoreSelector() {
  const storeOptions = [
    { name: 'Aldi', id: 'aldi' },
    { name: 'Kroger', id: 'kroger' },
    { name: 'Target', id: 'target' },
  ];

  const [selectedStores, setSelectedStores] = useState([]);
  const [expandedStore, setExpandedStore] = useState(null);

  const handleStoreSelection = (store) => {
    if (selectedStores.includes(store)) {
      // If the store is already selected, remove it
      setSelectedStores(selectedStores.filter(s => s !== store));
      setExpandedStore(null);
    } else {
      // If the store is not selected, add it
      setSelectedStores([...selectedStores, store]);
      setExpandedStore(store);
    }
  };

  return (
    <div className="StoreSelector-container">
      <h2>Store Selector</h2>
      {storeOptions.map(store => (
        <div key={store.id}>
          <label>
            <input
              type="checkbox"
              value={store.name}
              checked={selectedStores.includes(store.name)}
              onChange={() => handleStoreSelection(store.name)}
            />
            {store.name}
          </label>
          {expandedStore === store.name && (
            <div className="dropdown">
              <p>Dropdown content for {store.name} goes here</p>
              <button onClick={() => setExpandedStore(null)}>Close</button>
            </div>
          )}
          <br />
        </div>
      ))}
      <p>Selected Stores: {selectedStores.join(', ')}</p>

      {/* Navigation buttons */}
      <div>
        <Link to="/categories">
          <button className="button">See Categories</button>
        </Link>
        {/* Add more links for other pages */}
      </div>
    </div>
  );
}

export default StoreSelector;

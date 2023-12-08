import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/StoreSelector.css';

function StoreSelector() {
  const storeOptions = [
    { name: 'Aldi', id: 'aldi' },
    { name: 'Kroger', id: 'kroger' },
    { name: 'Target', id: 'target' },
  ];

  const [selectedStore, setSelectedStore] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [expandedStore, setExpandedStore] = useState(null);
  const [dropdownContent, setDropdownContent] = useState({});

  useEffect(() => {
    const fetchDropdownContent = async () => {
      try {
        const response = await axios.get('/api/stores/');
  
        if (!response.data || response.data.length === 0) {
          console.error('No content available for stores.');
          return;
        }
  
        console.log('Response data:', response.data);
  
        setDropdownContent(
          response.data.reduce((acc, company) => {
            console.log('Company:', company);
            // Check if company has valid stores array
            if (company.companyStores && Array.isArray(company.companyStores)) {
              acc[company.companyName] = company.companyStores.map(store => store.address);
            } else {
              console.error('Invalid or undefined properties for company:', company);
            }
            return acc;
          }, {})
        );
      } catch (error) {
        console.error('Error fetching dropdown content:', error);
      }
    };
  
    fetchDropdownContent();
  }, []);

  const handleStoreSelection = (store) => {
    setSelectedStore(store);
    setExpandedStore(store);
    // Reset selected address when store changes
    setSelectedAddress(null);
  };

  const handleAddressSelection = (address) => {
    setSelectedAddress(address);
  };

  return (
    <div className="StoreSelector-container">
      <h2>Store Selector</h2>
      <label>
        Select a store:
        <select
          value={selectedStore || ''}
          onChange={(e) => handleStoreSelection(e.target.value)}
        >
          <option value="" disabled>Select a store</option>
          {storeOptions.map((store) => (
            <option key={store.id} value={store.name}>
              {store.name}
            </option>
          ))}
        </select>
      </label>

      {expandedStore && dropdownContent[expandedStore] && (
        <div>
          <label>
            Select an address:
            <select
              value={selectedAddress || ''}
              onChange={(e) => handleAddressSelection(e.target.value)}
            >
              <option value="" disabled>Select an address</option>
              {dropdownContent[expandedStore].map((address, index) => (
                <option key={index} value={address}>
                  {address}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}

      <p>Selected Store: {selectedStore}</p>
      <p>Selected Address: {selectedAddress}</p>

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

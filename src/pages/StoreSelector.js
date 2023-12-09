import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/StoreSelector.css';

function StoreSelector() {
  const storeOptions = [
    { name: 'Aldi', id: 1 },
    { name: 'Kroger', id: 2 },
    { name: 'Target', id: 3 },
  ];

  const [selectedStore, setSelectedStore] = useState('');
  const [selectedStoreId, setSelectedStoreId] = useState('');
  const [expandedStore, setExpandedStore] = useState(null);
  const [dropdownContent, setDropdownContent] = useState({});
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDropdownContent = async () => {
      try {
        const response = await axios.get('/api/stores/');

        if (!response.data || response.data.length === 0) {
          console.error('No content available for stores.');
          return;
        }

        setDropdownContent(
          response.data.reduce((acc, company) => {
            if (company.companyStores && Array.isArray(company.companyStores)) {
              acc[company.companyName] = company.companyStores;
            } else {
              console.error('Invalid or undefined properties for company:', company);
            }
            return acc;
          }, {})
        );

        setLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.error('Error fetching dropdown content:', error);
        setError('Error fetching data. Please try again.'); // Set the error state
        setLoading(false); // Set loading to false after an error
      }
    };

    fetchDropdownContent();
  }, []);

  const handleStoreSelection = (store) => {
    const selectedStoreObj = storeOptions.find((option) => option.name === store);
    if (selectedStoreObj) {
      setSelectedStore(store);
      setSelectedStoreId(selectedStoreObj.id.toString());
      setExpandedStore(store);
      setSelectedAddress(null); // Clear selected address
    }
  };

  const handleAddressSelection = (address, storeId) => {
    setSelectedAddress({ id: address.id, address: address.address });
    setSelectedStoreId(storeId.toString());
  };

  const navigateToCategories = () => {
    if (selectedStoreId && selectedAddress) {
      const addressId = selectedAddress.id;
      navigate(`/categories/${addressId}`);
    } else {
      console.error('Please select a store and its address.');
    }
  };

  return (
    <div className="StoreSelector-container">
      <h2>Store Selector</h2>
      <label>
        Select Store:
        <select
          onChange={(e) => handleStoreSelection(e.target.value)}
          value={selectedStore || ''}
          disabled={loading || !!error}
        >
          <option value="" disabled>
            Select a store
          </option>
          {storeOptions.map((store) => (
            <option key={store.id} value={store.name}>
              {store.name}
            </option>
          ))}
        </select>
      </label>

      {expandedStore && (
        <div className="dropdown">
          <label>Select Address:</label>
          <select
            onChange={(e) => handleAddressSelection(JSON.parse(e.target.value), selectedStore)}
            value={selectedAddress ? JSON.stringify(selectedAddress) : ''}
            disabled={loading || !!error}
          >
            <option value="" disabled>
              Select an address
            </option>
            {dropdownContent[expandedStore] &&
              dropdownContent[expandedStore].map((item) => (
                <option key={item.id} value={JSON.stringify(item)}>
                  {item.address}
                </option>
              ))}
          </select>
          <button onClick={() => setExpandedStore(null)}>Close</button>
        </div>
      )}
      <p>Selected Store: {selectedStore}</p>
      <p>Selected Address: {selectedAddress ? selectedAddress.address : ''}</p>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div>
        <button onClick={navigateToCategories} className="button" disabled={loading || !!error}>
          See Categories
        </button>
      </div>
    </div>
  );
}

export default StoreSelector;

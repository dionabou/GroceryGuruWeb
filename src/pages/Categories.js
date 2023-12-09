import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Categories() {
  // Get the storeId from the URL parameters
  const { store: storeId } = useParams();

  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use the storeId directly in the URL
        const response = await fetch(`http://localhost:8080/api/categories/?companyStoreId=${storeId}`);

        if (!response.ok) {
          console.error('Failed to fetch categories. Status:', response.status);
          return;
        }

        const data = await response.json();
        setCategoryData(data);
      } catch (error) {
        console.error('Error fetching categories:', error.message);
      }
    };

    fetchData();
  }, [storeId]); // Include storeId as a dependency

  const mainCategories = ['Dairy', 'Meat', 'Paper Products', 'Fruits', 'Vegetables'];

  const subcategories = {
    Dairy: ['Eggs', 'Milk'],
    Meat: ['Beef', 'Chicken'],
    'Paper Products': ['Toilet Paper', 'Paper Towels'],
    Fruits: ['Apples', 'Bananas'],
    Vegetables: ['Potatoes', 'Onions', 'Lettuce', 'Tomatoes'],
  };

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
    setSelectedSubcategories([]); // Clear selected subcategories when a new main category is clicked
  };

  const handleCheckboxChange = (subcategory) => {
    setSelectedSubcategories((prevSelected) => {
      if (prevSelected.includes(subcategory)) {
        return prevSelected.filter((item) => item !== subcategory);
      } else {
        return [...prevSelected, subcategory];
      }
    });
  };

  return (
    <div className="container">
      <h2>Categories for Store ID: {storeId}</h2>
      {mainCategories.map((category) => (
        <div key={category}>
          <h3 onClick={() => handleCategoryClick(category)}>{category}</h3>
          {selectedCategory === category && (
            <ul>
              {subcategories[category].map((subcategory) => (
                <li key={subcategory}>
                  <label>
                    <input
                      type="checkbox"
                      value={subcategory}
                      checked={selectedSubcategories.includes(subcategory)}
                      onChange={() => handleCheckboxChange(subcategory)}
                    />
                    {subcategory}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {/* Navigation button to the "Building List" page */}
      <div>
        {/* Adjust the link based on your routing */}
        <a href="/BuildingList">
          <button className="button">See Product Details</button>
        </a>
        {/* Add more links for other pages */}
      </div>
    </div>
  );
}

export default Categories;

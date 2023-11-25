import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Categories.css";

function Categories() {
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
      <h2>Categories</h2>
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
        <Link to="/BuildingList">
          <button className="button">See Product Details</button>
        </Link>
        {/* Add more links for other pages */}
      </div>
    </div>
  );
}

export default Categories;

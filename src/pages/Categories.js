import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/Categories.css';

const Categories = () => {
  const { addressId } = useParams();

  const [categoryData, setCategoryData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:8080/api/categories/?companyStoreId=${addressId}`);

        if (!response.ok) {
          console.error('Failed to fetch categories. Status:', response.status);
          setError('Failed to fetch categories. Please try again later.');
          return;
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setCategoryData(data);
        } else {
          console.error('Invalid or missing categories in the API response:', data);
          setError('Invalid or missing categories in the API response.');
        }
      } catch (error) {
        console.error('Error fetching categories:', error.message);
        setError('Error fetching categories. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [addressId]);

  // Reset state when changing the selected category
  useEffect(() => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setSelectedCheckboxes({});
  }, [addressId]);

  const organizedCategories = {
    Dairy: {
      Milk: ['milk', '1%', '2%', 'skim', 'whole', 'organic', 'gal', 'quart', 'qt', 'lactose free'],
      Eggs: ['eggs', 'grade a', 'white', 'brown', 'large', 'extra large', 'cage free', 'jumbo', 'medium', 'free range', 'organic eggs'],
    },
    Meat: {
      Beef: ['beef', 'ground', 'chuck', 'lean', 'angus', 'roast', 'hamburger', 'burger', 'goetta', 'shaved', 'steak', 'cubed', 'new york strip', 'sirloin', 'top round', 'ribeye', 'bottom round', 'flank', 'filet mignon', 'tenderloin','grass fed'],
      Chicken: ['chicken', 'boneless', 'bone-in', 'wing', 'drumstick', 'breast', 'skinless', 'skin-on', 'tenderloin', 'thigh', 'organic', 'tender', 'whole', 'strip', 'gizzard', 'heart', 'leg'],
    },
    'Paper Products':{
      'Toilet paper': ['toilet paper', 'regular roll', 'double roll', 'mega roll', '1 ply', '2 ply', '3 ply', 'scented', 'recycled', 'rv', 'marine'],
      'Paper towel' : ['paper towels', 'double roll', 'double plus roll', 'giant roll', 'big roll', 'select-a-size', 'pick-a-size', 'tear-a-square'],
  },
    Fruit: { 
      Apples: ['apples', 'honeycrisp', 'gala' , 'pink lady', 'granny smith', 'organic', 'fuji', 'sweettango', 'cosmic crisp', 'opal', 'envy', 'red delicious', 'golden delicious', 'ambrosia', 'cortland', ],
    Bananas: [ 'bananas', 'organic', 'plantain'],
  },
    Vegetables:{
      Potatoes: ['potatoes', 'russet', 'jumbo', 'petite', 'gol', 'yukon gold', 'idaho', 'red', 'sweet', 'organic', 'fingerling', 'gourmet',  ],
    Onions: ['onions', 'sweet', 'jumbo', 'yellow', 'medium', 'white', 'red', 'green', 'organic', 'peruvian', 'gold', 'peeled', 'diced'],
    Lettuce: ['lettuce', 'iceberg', 'shredded', 'romaine', 'heart', 'green', 'leaf', 'organic', 'living', 'butter', 'red', 'baby', 'boston'],
    Tomatoes: ['tomatoes', 'red', 'on the vine', 'petite', 'medley', 'snacking', 'roma', 'large', 'beefsteak', 'grape', 'cherry', 'salad', 'campari', 'vine ripe', 'organic', 'heirloom', 'orange'],
 
    }
  };

  const categoryTags = {
    Milk: [ '1%', '2%', 'skim', 'whole', 'organic', 'gal', 'quart', 'qt', 'lactose free'],
    Eggs: [ 'grade a', 'white', 'brown', 'large', 'extra large', 'cage free', 'jumbo', 'medium', 'free range', 'organic eggs'],
    Beef: [ 'ground', 'chuck', 'lean', 'angus', 'roast', 'hamburger', 'burger', 'goetta', 'shaved', 'steak', 'cubed', 'new york strip', 'sirloin', 'top round', 'ribeye', 'bottom round', 'flank', 'filet mignon', 'tenderloin','grass fed'],
    Chicken: [ 'boneless', 'bone-in', 'wing', 'drumstick', 'breast', 'skinless', 'skin-on', 'tenderloin', 'thigh', 'organic', 'tender', 'whole', 'strip', 'gizzard', 'heart', 'leg'],
    'Toilet paper': [ 'regular roll', 'double roll', 'mega roll', '1 ply', '2 ply', '3 ply', 'scented', 'recycled', 'rv', 'marine'],
    'Paper towel' : [ 'double roll', 'double plus roll', 'giant roll', 'big roll', 'select-a-size', 'pick-a-size', 'tear-a-square'],
    Apples: [ 'honeycrisp', 'gala' , 'pink lady', 'granny smith', 'organic', 'fuji', 'sweettango', 'cosmic crisp', 'opal', 'envy', 'red delicious', 'golden delicious', 'ambrosia', 'cortland', ],
    Bananas: [  'organic', 'plantain'],
    Potatoes: [ 'russet', 'jumbo', 'petite', 'gol', 'yukon gold', 'idaho', 'red', 'sweet', 'organic', 'fingerling', 'gourmet',  ],
    Onions: [ 'sweet', 'jumbo', 'yellow', 'medium', 'white', 'red', 'green', 'organic', 'peruvian', 'gold', 'peeled', 'diced'],
    Lettuce: [ 'iceberg', 'shredded', 'romaine', 'heart', 'green', 'leaf', 'organic', 'living', 'butter', 'red', 'baby', 'boston'],
    Tomatoes: [ 'red', 'on the vine', 'petite', 'medley', 'snacking', 'roma', 'large', 'beefsteak', 'grape', 'cherry', 'salad', 'campari', 'vine ripe', 'organic', 'heirloom', 'orange'],
  };


  const handleCategoryClick = (category, event) => {
    event.preventDefault();
    if (selectedCategory === category) {
      // If the clicked category is already open, close it
      setSelectedCategory(null);
      setSelectedSubcategory(null);
      setSelectedCheckboxes({});
    } else {
      // If the clicked category is closed, open it
      setSelectedCategory(category);
      setSelectedSubcategory(null);
      setSelectedCheckboxes({});
    }
  };
  
  const handleSubcategoryClick = (subcategory) => {
    if (selectedSubcategory === subcategory) {
      // If the clicked subcategory is already open, close it
      setSelectedSubcategory(null);
      setSelectedCheckboxes({});
    } else {
      // If the clicked subcategory is closed, open it
      setSelectedSubcategory(subcategory);
      setSelectedCheckboxes({});
    }
  };
  

  const handleCheckboxChange = (checkbox) => {
    setSelectedCheckboxes((prevCheckboxes) => ({ ...prevCheckboxes, [checkbox]: !prevCheckboxes[checkbox] }));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container">
      <h2>Categories for Address ID: {addressId}</h2>
      <ul>
        {Object.entries(organizedCategories).map(([category, subcategories]) => (
          <li key={category}>
            <h3 onClick={(event) => handleCategoryClick(category, event)}>{category}</h3>
            {selectedCategory === category && (
              <ul>
                {Object.keys(subcategories).map((subcategory) => (
                  <li key={subcategory}>
                    <h4 onClick={() => handleSubcategoryClick(subcategory)}>{subcategory}</h4>
                    {selectedSubcategory === subcategory && (
                      <div>
                        {/* Filter buttons for the selected subcategory */}
                        {categoryTags[subcategory].map(tag => (
                          <button
                            key={tag}
                            onClick={() => handleCheckboxChange(tag)}
                            className={selectedCheckboxes[tag] ? 'active' : ''}
                          >
                            {tag}
                          </button>
                        ))}
                        {/* Product list with links to product details */}
                        <ul>
                          {categoryData
                            .filter((cat) => subcategories[subcategory].includes(cat.category?.toLowerCase()))
                            .flatMap((cat) =>
                              cat.productList
                                .filter((product) =>
                                  Object.entries(selectedCheckboxes).every(
                                    ([checkbox, isChecked]) =>
                                      !isChecked ||
                                      (
                                        (product.name && product.name.toLowerCase().includes(checkbox)) ||
                                        (product.description && product.description.toLowerCase().includes(checkbox))
                                      )
                                  )
                                )
                                .map((product) => (
                                  <li key={product.id}>
                                    {/* Use Link to navigate to product details page with productId */}
                                    <Link to={`/ProductDetails/${product.id}`}>
                                      <div>
                                        <p>Name: {product.name}</p>
                                        <p>Price: {product.price}</p>
                                        <img src={product.imageUrl} alt={product.name} />
                                      </div>
                                    </Link>
                                  </li>
                                ))
                            )}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Back and Next buttons */}
      <div className="navigation-buttons">
        <Link to="/store_selector">
          <button className="back-button">Back</button>
        </Link>
        <Link to="/building_list">
          <button className="next-button">Next</button>
        </Link>
      </div>
    </div>
  );
};
export default Categories;

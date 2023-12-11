import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Categories.css';
function Categories() {
  const { addressId } = useParams();

  const [categoryData, setCategoryData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({
    
  });
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

  const categorizeProduct = (category) => {
    if (category.includes('milk') || category.includes('egg')) {
      return 'Dairy';
    } else if (category.includes('beef') || category.includes('chicken')) {
      return 'Meat';
    } else if (category.includes('toilet paper') || category.includes('paper towel')) {
      return 'Paper Products';
    } else if (category.includes('potato') || category.includes('onion') || category.includes('lettuce') || category.includes('tomato')) {
      return 'Vegetables';
    } else if (category.includes('apple') || category.includes('banana')) {
      return 'Fruit';
    }

    return null; // Returning null for products that don't fit into any category
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
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

  const organizedCategories = {
    Dairy: ['milk', 'eggs'],
    Meat: ['beef', 'chicken'],
    'Paper Products': ['toilet paper', 'paper towels'],
    Vegetables: ['potatoes', 'onions', 'lettuce', 'tomatoes'],
    Fruit: ['apples', 'bananas'],
  };

  const categoryTags = {
    Dairy: ['milk', '1%', '2%', 'skim', 'whole', 'organic', 'gal', 'quart', 'qt', 'lactose free', 'eggs', 'grade a', 'white', 'brown', 'large', 'extra large', 'cage free', 'jumbo', 'medium', 'free range', 'organic eggs'],
    Meat: ['beef', 'ground', 'chuck', 'lean', 'angus', 'roast', 'hamburger', 'burger', 'goetta', 'shaved', 'steak', 'cubed', 'new york strip', 'sirloin', 'top round', 'ribeye', ' bottom round', 'flank', 'filet mignon', 'tenderloin','grass fed', 'chicken', 'boneless', 'bone-in', 'wing', 'drumstick', 'breast', 'skinless', 'skin-on', 'tenderloin', 'thigh', 'organic', 'tender', 'whole', 'strip', 'gizzard', 'heart', 'leg'],
    'Paper Products': ['toilet paper', 'regular roll', 'double roll', 'mega roll', '1 ply', '2 ply', '3 ply', 'scented', 'recycled', 'rv', 'marine', 'paper towels', 'double roll', 'double plus roll', 'giant roll', 'big roll', 'select-a-size', 'pick-a-size', 'tear-a-square'],
    Fruit: ['apples', 'honeycrisp', 'gala' , 'pink lady', 'granny smith', 'organic', 'fuji', 'sweettango', 'cosmic crisp', 'opal', 'envy', 'red delicious', 'golden delicious', 'ambrosia', 'cortland',   'bananas', 'organic', 'plantain'],
    Vegetables: ['potatoes', 'russet', 'jumbo', 'petite', 'gol', 'yukon gold', 'idaho', 'red', 'sweet', 'organic', 'fingerling', 'gourmet', 'onions', 'sweet', 'jumbo', 'yellow', 'medium', 'white', 'red', 'green', 'organic', 'peruvian', 'gold', 'peeled', 'diced', 'lettuce', 'iceberg', 'shredded', 'romaine', 'heart', 'green', 'leaf', 'organic', 'living', 'butter', 'red', 'baby', 'boston', 'tomatoes', 'red', 'on the vine', 'petite', 'medley', 'snacking', 'roma', 'large', 'beefsteak', 'grape', 'cherry', 'salad', 'campari', 'vine ripe', 'organic', 'heirloom', 'orange'],
  };

  return (
    <div className="container">
      <h2>Categories for Address ID: {addressId}</h2>
      <ul>
        {Object.entries(organizedCategories).map(([category, products]) => (
          <li key={category}>
            <h3 onClick={() => handleCategoryClick(category)}>{category}</h3>
            {selectedCategory === category && (
              <div>
                {/* Filter buttons for the selected category */}
                {categoryTags[category].map(tag => (
                  <button
                    key={tag}
                    onClick={() => handleCheckboxChange(tag)}
                    className={selectedCheckboxes[tag] ? 'active' : ''}
                  >
                    {tag}
                  </button>
                ))}
                {/* Product list */}
                <ul>
                  {categoryData
                    .filter((cat) => products.includes(cat.category.toLowerCase()))
                    .flatMap((cat) =>
                      cat.productList
                        .filter((product) => {
                          // Check if any selected checkbox matches the product's name or description
                          return Object.entries(selectedCheckboxes).some(
                            ([checkbox, isChecked]) =>
                              isChecked &&
                              (product.name.toLowerCase().includes(checkbox) ||
                                product.description.toLowerCase().includes(checkbox))
                          );
                        })
                        .map((product) => (
                          <li key={product.id}>
                            <div>
                              <p>Name: {product.name}</p>
                              <p>Price: {product.price}</p>
                              <img src={product.imageUrl} alt={product.name} />
                            </div>
                          </li>
                        ))
                    )}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;

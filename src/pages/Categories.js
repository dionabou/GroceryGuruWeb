import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Categories() {
  const { addressId } = useParams();

  const [categoryData, setCategoryData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
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

  const categorizeProduct = (product) => {
    const name = product.name.toLowerCase();

    if (name.includes('milk') || name.includes('egg')) {
      return 'Dairy';
    } else if (name.includes('beef') || name.includes('chicken')) {
      return 'Meat';
    } else if (name.includes('toilet paper') || name.includes('paper towel')) {
      return 'Paper Products';
    } else if (name.includes('potato') || name.includes('onion') || name.includes('lettuce') || name.includes('tomato')) {
      return 'Vegetables';
    } else if (name.includes('apple') || name.includes('banana')) {
      return 'Fruit';
    }

    return 'Others';
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
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
    Others: [],
  };

  categoryData.forEach((cat) => {
    const category = categorizeProduct(cat.productList[0]);
    if (organizedCategories[category]) {
      organizedCategories[category].push(cat.category.toLowerCase());
    } else {
      organizedCategories['Others'].push(cat.category.toLowerCase());
    }
  });

  return (
    <div className="container">
      <h2>Categories for Address ID: {addressId}</h2>
      <ul>
        {Object.entries(organizedCategories).map(([category, products]) => (
          <li key={category}>
            <h3 onClick={() => handleCategoryClick(category)}>{category}</h3>
            {selectedCategory === category && (
              <ul>
                {categoryData
                  .filter((cat) => products.includes(cat.category.toLowerCase()))
                  .flatMap((cat) =>
                    cat.productList.map((product) => (
                      <li key={product.id}>
                        <div>
                          <p>Name: {product.name}</p>
                          <p>Description: {product.description}</p>
                          <p>Price: {product.price}</p>
                          <p>Aisle Location: {product.aisleLocation}</p>
                          <img src={product.imageUrl} alt={product.name} />
                        </div>
                      </li>
                    ))
                  )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Favorites.css';

const Favorites = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/favorites/products', {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                }
            });
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
        
            const data = await response.json();
        
            if (!data || data.length === 0) {
            console.error('No content available for stores.');
            return;
            }
        
            setProducts(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Error fetching data. Please try again.');
            setLoading(false);
        }
    };
    fetchData();
      }, []);
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    

    return (
        <div class="favorites-container col align-items-center w-50 mx-auto bg-white p-5">
          <h1 class="text-center mb-4">My Favorites</h1>
          <ul style={{ paddingLeft: '0px'}}>
            {products.map(product => (
                <Link to={`/ProductDetails/${product.id}`}>
                    <li class="row align-items-center mx-auto  mb-2" key={product.id}>
                        <img class="col-4" style={{ border : '1px solid darkblue'}} src={product.imageUrl} alt={product.name} />
                        <span class="col-8">{product.name}</span>
                        
                    </li>
                </Link>
            ))}
          </ul>
        </div>
    );
};

export default Favorites;

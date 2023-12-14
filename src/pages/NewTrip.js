import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NewTrip = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/trips/reset', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            }
        });
        if (response.ok) {
          // Redirect to StoreSelector page if the response is OK
          navigate('/store_selector');
        } else {
          console.error('Failed to reach the server: ', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, [token, navigate]);

  return (
    <div>
    </div>
  );
};

export default NewTrip;

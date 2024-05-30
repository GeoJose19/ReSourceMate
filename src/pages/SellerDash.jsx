import React, { useState, useEffect } from 'react';
import { supabase } from '../config/supabaseClient';
import { useNavigate } from 'react-router-dom';
import './SellerDash.css';

const SellerDash = () => {
  const [products, setProducts] = useState([]);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const fetchUserId = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase
          .from('users')
          .select('*')
          .eq('email', user.email);

        if (error) {
          throw error;
        }

        if (data && data.length > 0) {
          setUserId(data[0].id); // Set the user ID state here
          console.log("User ID is: ", data[0].id);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchUserId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      try {
        if (userId) {
          const { data, error } = await supabase
            .from('products')
            .select('id, productname, desc, img, min_price')
            .eq('user_id', userId);

          if (error) {
            throw error;
          }

          if (data) {
            setProducts(data);
            console.log(data);
          }
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error (e.g., display an error message)
      }
    }

    fetchProducts();
  }, [userId]);

  // Function to handle navigation to '/dashboard'
  const navigateToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="seller-dash">
      <div className="seller-nav">
        <h1>Seller Dashboard</h1>
        {userId && <p>User ID: {userId}</p>}
        <button onClick={navigateToDashboard}>Go to Dashboard</button>
      </div>
      
      <div className="product-cards">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.productname}</h2>
            <p>Price: ${product.min_price}</p>
            <p>Description: {product.desc}</p>
            {/* Add more details from the product as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerDash;

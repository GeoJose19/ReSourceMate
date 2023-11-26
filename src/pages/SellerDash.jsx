import React, { useState, useEffect } from 'react';
import { supabase } from '../config/supabaseClient';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import './SellerDash.css';
=======
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import './SellerDash.css';
=======
>>>>>>> fca118184a842cbd858e74a47f227ecb73b499dc
>>>>>>> 6d8d85cb67f3e6ee1a1ef0d0a01f6c4cd01d049b

const SellerDash = () => {
  const [products, setProducts] = useState([]);
  const [userId, setUserId] = useState(null);
<<<<<<< HEAD
  const navigate = useNavigate(); // Initialize the useNavigate hook

=======
<<<<<<< HEAD
  const navigate = useNavigate();

  // Function to fetch the current user's ID
=======

>>>>>>> fca118184a842cbd858e74a47f227ecb73b499dc
>>>>>>> 6d8d85cb67f3e6ee1a1ef0d0a01f6c4cd01d049b
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
<<<<<<< HEAD
          setUserId(data[0].id); // Set the user ID state here
=======
<<<<<<< HEAD
          setUserId(data[0].id);
=======
          setUserId(data[0].id); // Set the user ID state here
>>>>>>> fca118184a842cbd858e74a47f227ecb73b499dc
>>>>>>> 6d8d85cb67f3e6ee1a1ef0d0a01f6c4cd01d049b
          console.log("User ID is: ", data[0].id);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

<<<<<<< HEAD
=======
<<<<<<< HEAD
  // Function to fetch bids for a specific product
  const fetchBidsForProduct = async (productId) => {
    try {
      const { data: bids, error } = await supabase
        .from('bids')
        .select('user_id, bid_amt')
        .eq('product_id', productId);

      if (error) {
        throw error;
      }

      return bids || [];
    } catch (error) {
      console.error('Error fetching bids:', error);
      return [];
    }
  };

  // Function to fetch transaction data for a specific product
  const fetchTransactionData = async (productId) => {
    try {
      const { data, error } = await supabase
        .from('transaction')
        .select('amt, user_id')
        .eq('product_id', productId)
        .single();

      if (error) {
        throw error;
      }

      return data ? { amt: data.amt, userId: data.user_id } : { amt: null, userId: null };
    } catch (error) {
      console.error('Error fetching transaction data:', error);
      return { amt: null, userId: null };
    }
  };

  // Function to fetch user data based on user ID
  const fetchUserData = async (userId) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('name')
        .eq('id', userId)
        .single();

      if (error) {
        throw error;
      }

      return data ? data.name : null;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  };

  // useEffect to fetch the user ID when the component mounts
  useEffect(() => {
    fetchUserId();
  }, []);

  // useEffect to fetch products when the user ID changes
=======
>>>>>>> 6d8d85cb67f3e6ee1a1ef0d0a01f6c4cd01d049b
  useEffect(() => {
    fetchUserId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

<<<<<<< HEAD
=======
>>>>>>> fca118184a842cbd858e74a47f227ecb73b499dc
>>>>>>> 6d8d85cb67f3e6ee1a1ef0d0a01f6c4cd01d049b
  useEffect(() => {
    async function fetchProducts() {
      try {
        if (userId) {
          const { data, error } = await supabase
            .from('products')
<<<<<<< HEAD
            .select('id, productname, desc, img, min_price')
=======
<<<<<<< HEAD
            .select('id, productname, desc, img, min_price, user_id')
=======
            .select('id, productname, desc, img, min_price')
>>>>>>> fca118184a842cbd858e74a47f227ecb73b499dc
>>>>>>> 6d8d85cb67f3e6ee1a1ef0d0a01f6c4cd01d049b
            .eq('user_id', userId);

          if (error) {
            throw error;
          }

          if (data) {
<<<<<<< HEAD
            setProducts(data);
            console.log(data);
=======
<<<<<<< HEAD
            const productsWithBidAndTransactionInfo = await Promise.all(data.map(async (product) => {
              const { amt, userId: transactionUserId } = await fetchTransactionData(product.id);
              const bids = await fetchBidsForProduct(product.id);
              return { ...product, amt, transactionUserId, bids };
            }));
            setProducts(productsWithBidAndTransactionInfo);
            console.log(productsWithBidAndTransactionInfo);
=======
            setProducts(data);
            console.log(data);
>>>>>>> fca118184a842cbd858e74a47f227ecb73b499dc
>>>>>>> 6d8d85cb67f3e6ee1a1ef0d0a01f6c4cd01d049b
          }
        }
      } catch (error) {
        console.error('Error fetching products:', error);
<<<<<<< HEAD
        // Handle error (e.g., display an error message)
=======
<<<<<<< HEAD
=======
        // Handle error (e.g., display an error message)
>>>>>>> fca118184a842cbd858e74a47f227ecb73b499dc
>>>>>>> 6d8d85cb67f3e6ee1a1ef0d0a01f6c4cd01d049b
      }
    }

    fetchProducts();
  }, [userId]);

<<<<<<< HEAD
  // Function to handle navigation to '/dashboard'
=======
<<<<<<< HEAD
  // Function to navigate to dashboard
>>>>>>> 6d8d85cb67f3e6ee1a1ef0d0a01f6c4cd01d049b
  const navigateToDashboard = () => {
    navigate('/dashboard');
  };

<<<<<<< HEAD
=======
  // Function to navigate to create page
  const navigateToCreate = () => {
    navigate('/choice');
  };

  // Function to confirm bid and display user's name in an alert
  const confirmBid = async (transactionUserId) => {
    try {
      const userName = await fetchUserData(transactionUserId);
      if (userName) {
        alert(`User Name: ${userName}`);
      } else {
        alert('User Name not found');
      }
    } catch (error) {
      console.error('Error confirming bid:', error);
      alert('Error confirming bid');
    }
  };

>>>>>>> 6d8d85cb67f3e6ee1a1ef0d0a01f6c4cd01d049b
  return (
    <div className="seller-dash">
      <div className="seller-nav">
        <h1>Seller Dashboard</h1>
        {userId && <p>User ID: {userId}</p>}
        <button onClick={navigateToDashboard}>Go to Dashboard</button>
<<<<<<< HEAD
      </div>
      
=======
        <button onClick={navigateToCreate}>Sell a product</button>
      </div>
      
=======
  return (
    <div className="seller-dash">
      <h1>Seller Dashboard</h1>
      {userId && <p>User ID: {userId}</p>}
>>>>>>> fca118184a842cbd858e74a47f227ecb73b499dc
>>>>>>> 6d8d85cb67f3e6ee1a1ef0d0a01f6c4cd01d049b
      <div className="product-cards">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.productname}</h2>
<<<<<<< HEAD
            <p>Price: ${product.min_price}</p>
            <p>Description: {product.desc}</p>
            {/* Add more details from the product as needed */}
=======
<<<<<<< HEAD
            <p>User ID: {product.user_id}</p>
            <p>Price: ${product.min_price}</p>
            <p>Description: {product.desc}</p>
            <p>Transaction Amount: {product.amt || 'No transactions'}</p>
            <p>Transaction User ID: {product.transactionUserId || 'No transaction user'}</p>
            <p>Bids:</p>
            <ul>
              {product.bids.map((bid, index) => (
                <li key={index}>
                  Bid Amount: ${bid.bid_amt} by User ID: {bid.user_id}
                </li>
              ))}
            </ul>
            <button className='button-65' onClick={() => navigateToCreate(product.id)}>Modify</button>
            <button className='button-65' onClick={() => confirmBid(product.transactionUserId)}>CONFIRM BID</button>
=======
            <p>Price: ${product.min_price}</p>
            <p>Description: {product.desc}</p>
            {/* Add more details from the product as needed */}
>>>>>>> fca118184a842cbd858e74a47f227ecb73b499dc
>>>>>>> 6d8d85cb67f3e6ee1a1ef0d0a01f6c4cd01d049b
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerDash;

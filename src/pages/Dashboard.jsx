import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../config/supabaseClient';

// Card component to display product details
const Card = ({ product, userId }) => {
  const { id, productname, desc, min_price, img } = product;
  const [bidAmount, setBidAmount] = useState(0);
  const [productIdInput, setProductIdInput] = useState('');
  const [userIdInput, setUserIdInput] = useState('');
  const [transactionAmt, setTransactionAmt] = useState(null); // State to hold transaction amount

  const fetchTransactionAmt = async () => {
    try {
      const { data, error } = await supabase
        .from('transaction')
        .select('amt')
        .eq('product_id', productIdInput)
        .single();

      if (error) {
        throw error;
      }

      if (data) {
        setTransactionAmt(data.amt); // Set the transaction amount state
      }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

      alert('Bid placed successfully,Bid ends in 2 days');
      // Optionally, you can refresh the product list or perform other actions upon successful bid placement
>>>>>>> fca118184a842cbd858e74a47f227ecb73b499dc
>>>>>>> 6d8d85cb67f3e6ee1a1ef0d0a01f6c4cd01d049b
    } catch (error) {
      console.error('Error fetching transaction amount:', error);
      // Handle error (e.g., display an error message)
    }
  };

  const handleBid = async () => {
    try {
      if (bidAmount <= 0 || !productIdInput || !userIdInput || !bidAmount) {
        // Ensure all required fields are filled
        alert('Please fill all fields and enter a valid bid amount');
        return;
      }
  
      // Perform bid insertion into the Bid table using userId and productId
      const { data: bidInsertData, error: insertError } = await supabase
        .from('bid')
        .insert([
          {
            user_id: userIdInput,
            product_id: productIdInput,
            bid_amt: bidAmount,
          },
        ]);
  
      if (insertError) {
        throw insertError;
      }
  
      alert('Bid placed successfully, Bid ends in 2 days');
  
      // Fetch the highest bid_amt from the bid table for the given bid_id
      // Update the transaction table with the highest bid_amt for the bid_id
      // Perform these operations after the bid insertion
      // Place the logic here
      // Fetch the highest bid_amt from the bid table for the given bid_id
      const { data: existingTransaction, error: fetchError } = await supabase
        .from('transaction')
        .select('amt')
        .eq('product_id', productIdInput)
        .single();

      console.log("Does it exist?", existingTransaction);

      if (existingTransaction === null) {
        const { error } = await supabase
          .from('transaction')
<<<<<<< HEAD
          .insert({ amt: bidAmount, product_id: productIdInput });
      } else {
        const { data: transactionUpdateData, error: transactionUpdateError } = await supabase
          .from('transaction')
          .update({ amt: bidAmount })
=======
          .insert({ amt: bidAmount, product_id: productIdInput,user_id:userIdInput });
      } else {
        const { data: transactionUpdateData, error: transactionUpdateError } = await supabase
          .from('transaction')
          .update({ amt: bidAmount, user_id: userIdInput })
>>>>>>> 6d8d85cb67f3e6ee1a1ef0d0a01f6c4cd01d049b
          .lt('amt', bidAmount)
          .eq('product_id', productIdInput);
      }

      if (fetchError) {
        throw fetchError;
      }

      if (productIdInput) {
        await fetchTransactionAmt();
      }
    } catch (error) {
      console.error('Error placing bid:', error);
      // alert('Bid not placed');
      // Handle error (e.g., display an error message)
    }
  };

  useEffect(() => {
    if (productIdInput) {
      fetchTransactionAmt();
    }
  }, [productIdInput]);

  return (
    <div className="card">
      {/* Display product details */}
      <img src={img} alt="no img" />
      <p>Product ID:  {id}</p>
      <h2>{productname}</h2>
      <p>{desc}</p>
      <p>Current Highest Bid: {transactionAmt}</p>
      <p>Price: ${min_price}</p>

      {/* Input fields for bid placement */}
      <div>
        <input
          className='input-box'
          type="number"
          placeholder="Place a bid"
          value={bidAmount}
          onChange={(e) => setBidAmount(Number(e.target.value))}
        />
        <input
          className='input-box'
          type="text"
          placeholder="Enter product ID"
          value={productIdInput}
          onChange={(e) => setProductIdInput(e.target.value)}
        />
        <input
          className='input-box'
          type="text"
          placeholder="Enter user ID"
          value={userIdInput}
          onChange={(e) => setUserIdInput(e.target.value)}
        />
        <button onClick={handleBid} className='bid-btn'>Place BID</button>
      </div>
    </div>
  );
};


// CardList component to display a list of products using Card component
const CardList = ({ products }) => {
  return (
    <div className="card-list">
      {products.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </div>
  );
};

// BuyerDashboard component
const BuyerDashboard = ({ token }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sellerId = queryParams.get('seller_id');
  const [products, setProducts] = useState([]);
  const [userId, setUserId] = useState('');

  const fetchUserId = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase
          .from('users')
          .select('*')
          .eq('email', user.email);

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
   const fetchUserId = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase
          .from('users')
          .select('*')
          .eq('email', user.email);

>>>>>>> fca118184a842cbd858e74a47f227ecb73b499dc
>>>>>>> 6d8d85cb67f3e6ee1a1ef0d0a01f6c4cd01d049b
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 6d8d85cb67f3e6ee1a1ef0d0a01f6c4cd01d049b
  useEffect(() => {
    fetchUserId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

<<<<<<< HEAD
  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data, error } = await supabase.from('products').select('id, productname, desc, img, min_price');
=======


>>>>>>> fca118184a842cbd858e74a47f227ecb73b499dc
  useEffect(() => {
    fetchUserId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      try {
<<<<<<< HEAD
        const { data, error } = await supabase.from('products').select('id, productname, desc, img, min_price');
=======
        const { data, error } = await supabase.from('products').select('id,productname, desc,img,min_price');
>>>>>>> fca118184a842cbd858e74a47f227ecb73b499dc
>>>>>>> 6d8d85cb67f3e6ee1a1ef0d0a01f6c4cd01d049b

        if (error) {
          throw error;
        }

        if (data) {
          setProducts(data);
          console.log(data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error (e.g., display an error message)
      }
    }

    fetchProducts();
  }, []);

  function handleLogout() {
    sessionStorage.removeItem('token');
    navigate('/');
  }
  
  return (
    <div className="dashboard-main">
      <div className="buyer-dashboard">
        <div className="buyer-nav">
          <h1 className='dash-logo'>ReSourceMate. </h1>
          <h1 className='dash-info'>Welcome To Buyer Dashboard</h1>
          <button className='button-65' onClick={() => navigate('/sellerlog')}>BECOME A SELLER</button>
<<<<<<< HEAD
          <button className='button-65' onClick={() => navigate('/adminlog')}>ADMIN</button>
=======
          <button className='button-65' onClick={() => navigate('/adminlog')}>ADMIN</button> 
          {/* <button className='button-65' onClick={() => navigate('/seller')}>Seller Dashboard</button> */}
>>>>>>> 6d8d85cb67f3e6ee1a1ef0d0a01f6c4cd01d049b
        </div>
        <div className="dash-content">

        </div>
        <div className="dashboard-content">
          <div className="log-info">
            <h1>Welcome back, {token.user.user_metadata.full_name}</h1>
            <p>User ID: {userId}</p>  
            <button className='button-65' onClick={handleLogout}>LOGOUT</button>
            {/* <button className='button-65'>CART</button> */}
          </div>
          <div className="card-dashboard">
            <CardList products={products} userId={token.user.id} />
          </div>
       </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
